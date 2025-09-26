import TermSelector from './TermSelector.tsx';
import type { Course } from '../types/Course.ts';
import CourseList from './CourseList.tsx';

interface TermPageProps{
  activeTerm: string;
  setActiveTerm: (term: string) => void;
  courses: Course[];
}

const TermPage = ({ activeTerm, setActiveTerm, courses}: TermPageProps) => {
  return (
    <div>
      <TermSelector activeTerm={activeTerm} setActiveTerm={setActiveTerm} />
      <CourseList courses={courses}/>
    </div>
  )
}

export default TermPage;