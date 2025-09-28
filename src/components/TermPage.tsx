import TermSelector from './TermSelector.tsx';
import type { Course } from '../types/Course.ts';
import CourseList from './CourseList.tsx';

interface TermPageProps{
  activeTerm: string;
  setActiveTerm: (term: string) => void;
  courses: Course[];
  toggleCourse: (course: Course) => void;
  selectedCourses: Course[];
}

const TermPage = ({ activeTerm, setActiveTerm, courses, toggleCourse, selectedCourses}: TermPageProps) => {
  return (
    <div>
      <TermSelector activeTerm={activeTerm} setActiveTerm={setActiveTerm} />
      <CourseList
        courses={courses}
        toggleCourse={toggleCourse}
        selectedCourses={selectedCourses}
      />
    </div>
  )
}

export default TermPage;