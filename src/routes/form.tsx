import { createFileRoute, useNavigate } from '@tanstack/react-router';
import CourseForm from '../components/CourseForm/CourseForm.tsx';
import type { Course } from '../types/Course.ts';
import { getDatabase, ref, update } from 'firebase/database';

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
  const course = searchParams.course;

  if (!course) {
    console.log("No course found.");
    navigate({ to: '/' });
  }

  const handleCancel = () => {
    navigate({ to: '/' });
  };

  const handleSubmit = async (data: Course, isDirty: boolean) => {
    if (!course.key) {
      throw new Error("Missing course key - cannot save.");
    }
    if (!data) {
      throw new Error("Empty or missing data - cannot save.");
    }
    if (!isDirty) {
      throw new Error("No changes made - skipping saving.");
    }
    try {
      const database = getDatabase();
      const { term, number, meets, title } = data;
      await update(ref(database, `/courses/${course.key}`), { term, number, meets, title });
      console.log("Course data submitted: ", data);
      navigate({ to: '/' });
    } catch (err) {
      console.error('Failed to save course: ', err);
      throw err;
    }
  };

  return (
    <div className="container pt-10 flex justify-center">
      <CourseForm
        course={course}
        onCancel={ handleCancel }
        onSubmit={ handleSubmit }
      />
    </div>
  );
}
