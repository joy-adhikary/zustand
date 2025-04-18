import {create} from "zustand";

type courseType = {
    name: string;
    description: string;
    duration: string;
    price: number;
    status: 'active' | 'inactive';
    courseCount: number;
    id: number;
}

interface CourseState {
    courses: courseType[];
    addCourse: (course: courseType) => void;
    removeCourse: (courseId: number) => void;
    updateCourseStatus: (courseId: number, status: 'active' | 'inactive') => void;
}

const useStore = create<CourseState>((set) => ({
    courses: [] as courseType[],
    
    addCourse: (course: courseType) => set((state) => ({
        courses: [...state.courses, course],
    })),

    removeCourse: (courseId: number) => set((state) => ({
        courses: state.courses.filter(course => course.id !== courseId),
    })),

    updateCourseStatus: (courseId: number, status: 'active' | 'inactive') => set((state) => ({
        courses: state.courses.map(course => 
            course.id === courseId ? { ...course, status } : course
        ),
    })),
}))

export default useStore;
