import type { Course } from '../types/Course.ts';

interface SelectedCoursesProps {
  selectedCourses: Course[];
}

const SelectedCourses = ({selectedCourses}: SelectedCoursesProps) => (
  <div>
    <h1 className="text-2xl">Your courses</h1>
    <ul className="ml-6 h-24 overflow-auto border border-gray-400 p-4">
      {
  selectedCourses.map(course => <li key={`${course.id ?? `${course.term}-${course.number}`}`}>{course.term} CS {course.number}: {course.title}</li>)
      }
    </ul>
  </div>
);

export default SelectedCourses;