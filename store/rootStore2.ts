import { create } from "zustand";
// import { devtools, persist } from "zustand/middleware";
import { InstructorState, InstructorStore } from "./instructorStore";
import { CourseState, courseStore } from "./courseStore";

const useRootState = create<CourseState & InstructorState>()((...a) => ({
  ...InstructorStore(...a),
  ...courseStore(...a),
}));

export default useRootState;