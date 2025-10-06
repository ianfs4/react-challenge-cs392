import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import SelectedCourses from '../components/SelectedCourses.tsx';
import FetchedCourses from '../components/TermPage/FetchedCourses.tsx';
import ScheduleModal from '../components/CoursePlanModal.tsx';
import type { Course } from '../types/Course.ts';

const toggleSelectedCourse = (x: Course, lst: Course[]): Course[] => {
  const isSelected = lst.some((course) => {
    if (course.id && x.id) return course.id === x.id;
    return course.term === x.term && course.number === x.number && course.meets === x.meets;
  });

  if (isSelected) {
    return lst.filter((course) => {
      if (course.id && x.id) return course.id !== x.id;
      return !(course.term === x.term && course.number === x.number && course.meets === x.meets);
    });
  }

  return [...lst, x];
};

const queryClient = new QueryClient();

const Index = () => {
  const [activeTerm, setActiveTerm ] = useState("Fall");
  const [selectedCourses, setSelectedCourses] = useState<Course[]>([]);
  const [showCoursePlan, setshowCoursePlan] = useState(false);

  const toggleCourse = (course: Course) => {
    setSelectedCourses(selected => toggleSelectedCourse(course, selected));
  }

  return (
    <QueryClientProvider client={queryClient}>
      <div className="container">
        <SelectedCourses selectedCourses={selectedCourses} />
        <FetchedCourses
          activeTerm={activeTerm}
          setActiveTerm={setActiveTerm}
          toggleCourse={toggleCourse}
          selectedCourses={selectedCourses}
          showCoursePlan={showCoursePlan}
          setshowCoursePlan={setshowCoursePlan}
        />

        <ScheduleModal
          selectedCourses={selectedCourses}
          toggleCourse={toggleCourse}
          isOpen={showCoursePlan}
          onClose={() => setshowCoursePlan(false)}
        ></ScheduleModal>
      </div>
    </QueryClientProvider>
  )
}

export const Route = createFileRoute('/')({
  component: Index,
});