import { useNavigate } from '@tanstack/react-router';
import type { Course } from '../types/Course.ts';
import { hasConflictWithSelected } from '../utilities/timeConflicts.ts';

interface CourseCardProps {
  course: Course;
  toggleCourse: (course: Course) => void;
  selectedCourses: Course[];
}

const CourseCard = ({course, toggleCourse, selectedCourses}: CourseCardProps) => {
  const navigate = useNavigate();
  const isSelected = selectedCourses.some(selected => selected.number === course.number && selected.term === course.term);
  const hasConflict = hasConflictWithSelected({ course, selectedCourses} );

  const handleEditClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent the card's onClick from firing
    navigate({ to: '/form', search: { course: course } }); // Add leading slash
  };

  return (
    <div
      className={`m-1 p-6 rounded shadow border-2 ${
        isSelected ? 'bg-green-200 border-green-500 cursor-pointer' :
        hasConflict ? 'bg-gray-300 cursor-not-allowed opacity-50 border-gray-400' :
        'bg-white border cursor-pointer border-gray-300'
      }`}
      onClick={() => {if(!hasConflict || isSelected) toggleCourse(course)}}
    >
      <div className="text-xl font-semibold mb-2">
        {course.term} CS {course.number}
      </div>
      <div className="mt-2 flex-1">
        {course.title}
      </div>
      <hr className="my-3" />
      <div className="text-sm">
        Meets: {course.meets}
      </div>
      <button
        onClick={handleEditClick}
        className="mt-3 px-4 py-2 rounded-lg border border-gray-300 text-gray-700 font-medium hover:bg-gray-200 transition"
      >
        Edit Course
      </button>
    </div>
  );
};

export default CourseCard;