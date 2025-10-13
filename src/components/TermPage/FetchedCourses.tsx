import { useDataQuery } from '../../utilities/firebase.ts';
import type { Course } from '../../types/Course.ts';
import Banner from './Banner.tsx';
import TermPage from './TermPage.tsx';

interface FetchedCoursesProps {
  activeTerm: string;
  setActiveTerm: (term: string) => void;
  toggleCourse: (course: Course) => void;
  selectedCourses: Course[];
  showCoursePlan: boolean;
  setshowCoursePlan: (showCoursePlan: boolean) => void;
}

const FetchedCourses = ({ activeTerm, setActiveTerm, toggleCourse, selectedCourses, showCoursePlan, setshowCoursePlan }: FetchedCoursesProps) => {
  const [data, isLoading, error] = useDataQuery('/');

  if (error) return <h1>Error loading user data: {`${error}`}</h1>;
  if (isLoading) return <h1>Loading user data...</h1>;
  if (!data) return <h1>No user data found</h1>;

  const coursesObject = data.courses || {};
  const coursesArray = Object.entries(coursesObject).map(([key, course]) => {
    return ({ key, ...(course as any) } as Course);
  });
  
  return (
    <div>
      <Banner title={data.title} />
      <TermPage
        activeTerm={activeTerm}
        setActiveTerm={setActiveTerm}
        courses={coursesArray.filter((course) => course.term === activeTerm)}
        toggleCourse={toggleCourse}
        selectedCourses={selectedCourses}
        showCoursePlan={showCoursePlan}
        setshowCoursePlan={setshowCoursePlan}
      />
    </div>
  );
};

export default FetchedCourses;