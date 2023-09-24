import React from 'react';
import { CourseState } from '@/app/Model/Course';

// Define the props interface for the Course component
interface CourseProps {
  course: CourseState;
}

// Course component is a functional component receiving 'courses' as a prop
const CourseDetail: React.FC<CourseProps> = ({ course }) => {
  return (
    <div className="flex flex-col space-y-10 p-2">
      {/* Title for the list of available courses */}
      <h1 className="capitalize text-3xl text-center font-bold">
        Course information
      </h1>

      {/* Render the CourseList component and pass the 'courses' prop */}
      <div className="rounded-lg text-center space-y-10">
        <h2 className="text-2xl font-semibold">{course.course_name}</h2>
        <p className="text-gray-600 text-xl">{course.instructor}</p>
        <p className="text-gray-700 my-2 text-xl">
          {course.description.slice(0, 30)}...
        </p>
        <p className="text-gray-600">Duration: {course.duration}</p>
        <p className="text-green-600 font-semibold mt-2">${course.price}</p>
        <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          Enroll Now
        </button>
      </div>
    </div>
  );
};

export default CourseDetail;
