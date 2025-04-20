import { StateCreator } from "zustand";
// import { devtools, persist } from "zustand/middleware";

export type instructorType = {
  name: string;
  description: string;
  id: number;
};

export interface InstructorState {
  instructors: instructorType[];
  addInstructor: (instructor: instructorType) => void;
  removeInstructor: (instructorId: number) => void;
  getTotalInstructors: () => number;
}

export const InstructorStore: StateCreator<InstructorState, [], [], InstructorState> = (set, getState) => ({
  instructors: [] as instructorType[],
  
  addInstructor: (instructor: instructorType) =>
    set((state) => ({
      instructors: [...state.instructors, instructor],
    })),

  removeInstructor: (instructorId: number) =>
    set((state) => ({
      instructors: state.instructors.filter(
        (instructor) => instructor.id !== instructorId
      ),
    })),

  getTotalInstructors: (): number => {
    const totalInstructors = getState().instructors.length;
    return totalInstructors;
  },
});

const useInstructorStore = InstructorStore;

export default useInstructorStore;
