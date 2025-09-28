export interface Course {
  key?: string;
  term: string;
  number: string;
  meets: string;
  title: string;
}

export interface CourseListProps {
  courses: {[key: string] : Course};
}