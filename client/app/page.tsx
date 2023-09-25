import CourseGroup from './Components/Course/CourseGroup';
import { asyncGetCourse } from './Helpers/Course';

export const dynamic = 'force-dynamic';

const Home = async () => {
  try {
    const courses = await asyncGetCourse();
    return (
      <div className="grid grid-cols-1 gap-3">
        <CourseGroup courses={courses} />
      </div>
    );
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export default Home;
