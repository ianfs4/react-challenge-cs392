import { useForm } from 'react-hook-form'
import { courseResolver, type Course } from '../../types/Course.ts';

interface CourseFormProps {
  course?: Course;
  onCancel: () => void;
  onSubmit: (data: Course) => void;
}

const CourseForm = ({ course, onCancel, onSubmit }: CourseFormProps) => {

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<Course>({
    defaultValues: course || {
      term: undefined,  // typescript wasn't happy with empty string here
      number: '',
      title: '',
      meets: ''
    },
    mode: 'onChange',
    resolver: courseResolver 
  });

  const onFormSubmit = (data: Course) => {
    console.log('Form submitted: ', data);
    if (onSubmit) {
      onSubmit(data);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md">
      <h2 className="text-2xl font-bold mb-6">Edit Course</h2>
      
      <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-4">
        <label className="block">
          <span className="text-sm font-semibold text-gray-700">Term</span>
          <input
            type="text"
            {...register('term')}
            className="w-full rounded-lg border border-gray-300 bg-white p-3 mt-1 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
          />
          {errors.term && (
            <span className="text-red-500 text-sm mt-1 block">
              {errors.term.message}
            </span>
          )}
        </label>

        <label className="block">
          <span className="text-sm font-semibold text-gray-700">Course Number</span>
          <input
            type="text"
            {...register('number')}
            className="w-full rounded-lg border border-gray-300 bg-white p-3 mt-1 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
          />
          {errors.number && (
            <span className="text-red-500 text-sm mt-1 block">
              {errors.number.message}
            </span>
          )}
        </label>

        <label className="block">
          <span className="text-sm font-semibold text-gray-700">Course Title</span>
          <input
            type="text"
            {...register('title')}
            className="w-full rounded-lg border border-gray-300 bg-white p-3 mt-1 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
          />
          {errors.title && (
            <span className="text-red-500 text-sm mt-1 block">
              {errors.title.message}
            </span>
          )}
        </label>

        <label className="block">
          <span className="text-sm font-semibold text-gray-700">Meeting Time</span>
          <input
            type="text"
            {...register('meets')}
            className="w-full rounded-lg border border-gray-300 bg-white p-3 mt-1 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
          />
          {errors.meets && (
            <span className="text-red-500 text-sm mt-1 block">
              {errors.meets.message}
            </span>
          )}
        </label>

        <div className="flex justify-left gap-3 mt-6">
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 font-medium hover:bg-gray-200 transition"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-4 py-2 rounded-lg bg-blue-500 text-white font-medium hover:bg-blue-600 disabled:bg-gray-400 transition"
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CourseForm;