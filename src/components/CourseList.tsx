import type { Course } from '../types/Course.ts';
import CourseCard from './CourseCard.tsx'

interface CourseListProps {
  courses: Course[];
  toggleCourse: (course: Course) => void;
  selectedCourses: Course[];
}

const CourseList = ({courses, toggleCourse, selectedCourses}: CourseListProps) => (
  <div className="grid grid-cols-[repeat(auto-fill,minmax(16rem,1fr))] gap-4">
    {Object.values(courses).map((course) => (
      <CourseCard
        key={`${course.key}`}
        course={course}
        toggleCourse={toggleCourse}
        selectedCourses={selectedCourses}
      />
    ))}
  </div>
);

export default CourseList;