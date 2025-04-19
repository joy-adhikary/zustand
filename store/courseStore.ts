import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

export type courseType = {
    name: string;
    description: string;
    duration: string;
    price: number;
    status: string;
    id: number;
};

export interface CourseState {
    courses: courseType[];
    addCourse: (course: courseType) => void;
    removeCourse: (courseId: number) => void;
    updateCourseStatus: (courseId: number) => void;
    getAllPrice : () => number;
}

export const courseStore = create<CourseState>()(
    devtools(
        persist(
            (set) => ({
                courses: [] as courseType[],

                addCourse: (course: courseType) => set((state) => ({
                    courses: [...state.courses, course],
                })),

                removeCourse: (courseId: number) => set((state) => ({
                    courses: state.courses.filter(course => course.id !== courseId),
                })),

                updateCourseStatus: (courseId: number) => set((state) => {
                    return {
                        courses: state.courses.map(course =>
                            course.id === Number(courseId) ? { ...course, status: course.status === 'inactive' ? 'active' : 'inactive' } : course
                        ),
                    };
                }),

                getAllPrice: () : number => {
                    const totalPrice = courseStore.getState().courses.reduce((acc, course) => acc + course.price, 0);
                    return  totalPrice;
                }
            }),
            {
                name: 'joy'
            }
        )
    )
);

const useCourseStore = courseStore;

export default useCourseStore;

