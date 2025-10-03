import type { Course } from '../types/Course.ts';

interface hasConflictWithSelectedProps {
  course: Course;
  selectedCourses: Course[];
}

type MeetingTime = {
  days: string[];
  start: number;
  end: number;
};

export const hasConflictWithSelected = ({course, selectedCourses}: hasConflictWithSelectedProps): boolean => {
  if (!selectedCourses || selectedCourses.length === 0) return false;
  if (!course.meets) return false;

  return selectedCourses.some((selectedCourse) => {
    if (selectedCourse.term !== course.term || !selectedCourse.meets) return false;

    const meeting1 = parseMeetingTime(course.meets);
    const meeting2 = parseMeetingTime(selectedCourse.meets);
    return isConflicting(meeting1, meeting2);
  });
}

/**
 * TIME CONFLICT HELPER FUNCTIONS
 */

const isConflicting = (
  meeting1: MeetingTime,
  meeting2: MeetingTime
): boolean => daysConflict(meeting1.days, meeting2.days) &&
              timesConflict(meeting1.start, meeting1.end, meeting2.start, meeting2.end);

const daysConflict = (days1: string[], days2: string[]): boolean => days1.some((item) =>
  days2.includes(item))

const timesConflict = (
  start1: number,
  end1: number,
  start2: number,
  end2: number
): boolean => start1 < end2 && end1 > start2;

/** 
 * PARSING FUNCTIONS
 */

// parse the days and start/end times of a class based on its meets string
const parseMeetingTime = (meets: string): MeetingTime => {
  const [days, time] = meets.split(" ");

  const dayList = parseDays(days);
  const [start, end] = parseTime(time);
  return {
    days: dayList,
    start: start,
    end: end
  }
}

const parseDays = (dayString: string): string[] => {
  let days: string[] = [];
  let i = 0;
  while (i < dayString.length) {
    if (i + 1 < dayString.length) {
      const twoChars = dayString.substring(i, i + 2);
      if (twoChars === "Tu" || twoChars === "Th") {
        days.push(twoChars);
        i += 2;
        continue;
      }
    }

    days.push(dayString[i])
    i += 1;
  }
  return days;
}

const parseTime = (timeString: string): [number, number] => {
  const [start, end] = timeString.split('-');
  return [timeToMinutes(start), timeToMinutes(end)];
}

const timeToMinutes = (time: string): number => {
  const [hours, minutes] = time.split(':').map(Number);
  return hours * 60 + minutes;
}