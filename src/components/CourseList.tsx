interface Course {
  term: string;
  number: string;
  meets: string;
  title: string;
}

interface CourseListProps {
  courses: {[key: string] : Course};
}

const CourseList = ({courses}: CourseListProps) => (
  <div>
    {Object.values(courses).map((course) => (
      <p>
        {course.term} CS {course.number}: {course.title}
      </p>
    ))}
  </div>
)

export default CourseList;