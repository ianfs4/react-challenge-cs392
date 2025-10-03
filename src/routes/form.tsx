import { createFileRoute, useNavigate } from '@tanstack/react-router';
import CourseForm from '../components/CourseForm.tsx';
import type { Course } from '../types/Course.ts';

type FormSearch = {
  course: Course;
}

export const Route = createFileRoute('/form')({
  component: RouteComponent,
  validateSearch: (search: Record<string, unknown>): FormSearch => {
    return {
      course: (search.course as Course) || null
    };
  },
})

function RouteComponent() {
  const navigate = useNavigate();
  const searchParams = Route.useSearch();
  const course = searchParams.course

  const handleCancel = () => {
    navigate({ to: '/' });
  };

  return (
    <div>
      <CourseForm course={course} onCancel={ () => {handleCancel()} }/>
    </div>
  );
}
