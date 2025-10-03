import type { Course } from '../types/Course.ts';
import Modal from './Modal.tsx';

interface CoursePlanModalProps {
  selectedCourses: Course[];
  toggleCourse: (course: Course) => void;
  isOpen: boolean;
  onClose: () => void
}

const CoursePlanModal = ({ selectedCourses, toggleCourse, isOpen, onClose }: CoursePlanModalProps) => {
  const groupedCourses = selectedCourses.reduce((acc, course) => {
    if (!acc[course.term]) {
      acc[course.term] = [];
    }
    acc[course.term].push(course);
    return acc;
  }, {} as Record<string, Course[]>);

  const terms = ['Fall', 'Winter', 'Spring'];
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="flex flex-col">
        <h2 className="text-lg font-bold">Course Plan</h2>

        {selectedCourses.length > 0 ? (
          <div className="flex flex-col gap-4">
            {terms.map(term => {
              const courses = groupedCourses[term];
              if (!courses || courses.length === 0) return null;
              
              return (
                <div key={term}>
                  <h3 className="text-lg font-semibold mb-2">{term}</h3>
                  <div className="flex flex-col gap-2">
                    {courses.map((course) => (
                      <button 
                        key={`${course.term}-${course.number}`}
                        onClick={() => toggleCourse(course)}
                        className="p-3 bg-gray-100 hover:bg-gray-300 rounded"
                      >
                        <div className="font-medium">
                          CS {course.number}: {course.title}
                        </div>
                        <div className="text-sm text-gray-600 mt-1">
                          {course.meets}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-6">
            <p className="text-gray-600 mb-2">No courses selected yet!</p>
            <p className="text-sm text-gray-500">
              Click on any course card to add it to your plan.
            </p>
          </div>
        )}
      </div>
    </Modal>
  );
};

export default CoursePlanModal;