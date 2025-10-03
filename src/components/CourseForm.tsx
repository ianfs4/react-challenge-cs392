import { useState } from 'react';
import type { Course } from '../types/Course.ts';

interface CourseFormProps {
  course?: Course;
  onCancel: () => void;
}

const CourseForm = ({ course, onCancel }: CourseFormProps) => {
  const [title, setTitle] = useState(course?.title || '');
  const [meets, setMeets] = useState(course?.meets || '');

  const handleSubmit = (evt: React.FormEvent) => {
    evt.preventDefault(); // submit does nothing for now
  };

  return (
    <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md">
      <h2 className="text-2xl font-bold mb-6">Edit Course</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <label className="block">
          <span className="text-sm font-semibold text-gray-700">Course Title</span>
          <input
            type="text"
            name="title"
            value={title}
            onChange={(evt) => setTitle(evt.target.value)}
            className="w-full rounded-lg border border-gray-300 bg-white p-3 mt-1 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
          />
        </label>

        <label className="block">
          <span className="text-sm font-semibold text-gray-700">Meeting Time</span>
          <input
            type="text"
            name="meets"
            value={meets}
            onChange={(evt) => setMeets(evt.target.value)}
            className="w-full rounded-lg border border-gray-300 bg-white p-3 mt-1 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
          />
        </label>

        <div className="flex justify-left gap-3 mt-6">
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 font-medium hover:bg-gray-200 transition"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default CourseForm;