export interface Course {
  term: string;
  number: string;
  meets: string;
  title: string;
}

export interface CourseListProps {
  courses: {[key: string] : Course};
}