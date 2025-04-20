import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { InstructorState, InstructorStore } from "./instructorStore";
import { CourseState, courseStore } from "./courseStore";

const useRootState = create<CourseState & InstructorState>()(
  devtools(
    (...a) => ({
      ...InstructorStore(...a),
      ...courseStore(...a),
    }),
    { name: "RootStore" }
  )
);

export default useRootState;
