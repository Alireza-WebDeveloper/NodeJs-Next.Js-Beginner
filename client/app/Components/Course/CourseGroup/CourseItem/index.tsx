import { CourseState } from '@/app/Model/Course';
import Link from 'next/link';

interface CourseItemProps {
  course: CourseState;
}
const CourseItem: React.FC<CourseItemProps> = ({ course }) => {
  return (
    <Link href={`/course/${course.course_id}`}>
      <div className="bg-white rounded-lg shadow-lg p-4">
        <h2 className="text-2xl font-semibold">{course.course_name}</h2>
        <p className="text-gray-600 text-sm">{course.instructor}</p>
        <p className="text-gray-700 my-2">{course.description.slice(0, 30)}</p>

        <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          Enroll Now
        </button>
      </div>
    </Link>
  );
};

export default CourseItem;
