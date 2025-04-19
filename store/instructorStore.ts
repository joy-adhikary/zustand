import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

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

export const InstructorStore = create<InstructorState>()(
  devtools(
    persist(
      (set) => ({
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
          const totalInstructors =
            InstructorStore.getState().instructors.length;
          return totalInstructors;
        },
      }),
      {
        name: "instructorStore",
      }
    )
  )
);

const useInstructorStore = InstructorStore;

export default useInstructorStore;
