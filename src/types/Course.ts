import * as z from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";

const Course = z.object({
  key: z.string(),
  term: z.enum(['Fall', 'Winter', 'Spring', 'Summer'], {
    message: 'Term must be Fall, Winter, Spring, or Summer'
  }),
  number: z.string().regex(/^\d+(-\d+)?$/, {
    message: 'Must be a number (with optional section), e.g., 213 or 213-2'
  }),
  meets: z.string().refine(
    (value) => {
      if (value === '') return true;
      
      // Meeting time format: Days followed by space and time range
      // Days: one or more of M, Tu, W, Th, F
      // Time: HH:MM-HH:MM format
      const meetingPattern = /^(M|Tu|W|Th|F)+ \d{1,2}:\d{2}-\d{1,2}:\d{2}$/;
      return meetingPattern.test(value);
    },
    {
      message: 'Must contain days and start-end in \"DDD HH:MM-HH:MM\" format, e.g., MWF 12:00-13:20'
    }
  ),
  title: z.string().min(2, {
    message: 'Title must be at least 2 characters'
  })
})

export interface CourseListProps {
  courses: {[key: string] : Course};
}

export type Course = z.infer<typeof Course>;

export const courseResolver = zodResolver(Course);