import TermSelector from './TermSelector.tsx';
import CoursePlanButton from './CoursePlanButton.tsx';
import type { Course } from '../types/Course.ts';
import CourseList from './CourseList.tsx';

interface TermPageProps{
  activeTerm: string;
  setActiveTerm: (term: string) => void;
  courses: Course[];
  toggleCourse: (course: Course) => void;
  selectedCourses: Course[];
  showCoursePlan: boolean;
  setshowCoursePlan: (showCoursePlan: boolean) => void;
}

const TermPage = ({ activeTerm, setActiveTerm, courses, toggleCourse, selectedCourses, showCoursePlan, setshowCoursePlan}: TermPageProps) => {
  return (
    <div>
      <div className="flex justify-between my-4">
        <TermSelector activeTerm={activeTerm} setActiveTerm={setActiveTerm} />
        <CoursePlanButton
          showCoursePlan={showCoursePlan}
          setshowCoursePlan={setshowCoursePlan}
        />
      </div>
      <CourseList
        courses={courses}
        toggleCourse={toggleCourse}
        selectedCourses={selectedCourses}
      />
    </div>
  )
}

export default TermPage;