import { useJsonQuery } from '../utilities/fetchData.ts';
import type { Course } from '../types/Course.tsx';
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
  const [data, isLoading, error] = useJsonQuery(
    'https://courses.cs.northwestern.edu/394/guides/data/cs-courses.php'
  );

  if (error) return <h1>Error loading user data: {`${error}`}</h1>;
  if (isLoading) return <h1>Loading user data...</h1>;
  if (!data) return <h1>No user data found</h1>;

  const coursesArray = Object.entries(data.courses).map(([key, course]) => ({
    key,
    ...(course as Omit<Course, 'key'>),
  }));

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