import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import SelectedCourses from './components/SelectedCourses.tsx';
import FetchedCourses from './components/FetchedCourses.tsx';
import type { Course } from './types/Course.ts';

const toggleSelectedCourse = (x: Course, lst: Course[]): Course[] => (
  lst.includes(x) ? lst.filter(y => y !== x) : [...lst, x]
);

const queryClient = new QueryClient();

const App = () => {
  const [activeTerm, setActiveTerm ] = useState("Fall");
  const [selectedCourses, setSelectedCourses] = useState<Course[]>([]);

  const toggleCourse = (course: Course) => {
    setSelectedCourses(selected => toggleSelectedCourse(course, selected));
  }

  return (
    <QueryClientProvider client={queryClient}>
      <div className="container">
        <SelectedCourses selectedCourses={selectedCourses} />
        <FetchedCourses activeTerm={activeTerm} setActiveTerm={setActiveTerm} toggleCourse={toggleCourse} selectedCourses={selectedCourses} />
      </div>
    </QueryClientProvider>
  )
}

export default App;
