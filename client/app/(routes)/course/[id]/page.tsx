import CourseDetail from '@/app/Components/Course/CourseDetail';
import { asyncGetCourseDetail } from '@/app/Helpers/Course';
import { NextPage } from 'next';
interface PageProps {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

const Page: NextPage<PageProps> = async ({ params }) => {
  try {
    const { id } = params;
    const course = await asyncGetCourseDetail(id);

    return (
      <div className="grid grid-cols-1 gap-4">
        <CourseDetail course={course} />
      </div>
    );
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export default Page;
