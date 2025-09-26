import type { Course } from '../types/Course.ts';
import CourseCard from './CourseCard.tsx'

interface CourseListProps {
  courses: Course[];
}

const CourseList = ({courses}: CourseListProps) => (
  <div className="grid grid-cols-[repeat(auto-fill,minmax(16rem,1fr))] gap-4">
    {Object.values(courses).map((course) => (
      <CourseCard key={`${course.term}${course.number}`} course={course} />
    ))}
  </div>
);

export default CourseList;