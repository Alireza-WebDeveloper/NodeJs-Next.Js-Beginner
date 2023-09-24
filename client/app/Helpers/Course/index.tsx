import { CourseState } from '@/app/Model/Course';
import BaseApi from '../Base';

const asyncGetCourse = async () => {
  try {
    const response = await BaseApi.get<CourseState[]>('/course');
    return response.data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

const asyncGetCourseDetail = async (id: any) => {
  try {
    const response = await BaseApi.get<CourseState>(`/course?id=${id}`);
    return response.data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export { asyncGetCourseDetail, asyncGetCourse };
