import type { Course } from '../types/Course.ts';

interface CourseCardProps {
  course: Course;
}

const CourseCard = ({course}: CourseCardProps) => (
  <div className="card m-1 p-6">
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
  </div>
);

export default CourseCard;