// import { create } from "zustand";
// import { devtools, persist } from "zustand/middleware";
// import { InstructorState, InstructorStore } from "./instructorStore";
// import { CourseState, courseStore } from "./courseStore";

// export type RootState = {
//   instructor: InstructorState;
//   course: CourseState;
// };

// const useRootStore = create<RootState>()(
//   devtools(
//     persist(
//       (set, get) => ({
//         instructor: {
//           instructors: InstructorStore.instructors,
//           addInstructor: InstructorStore.addInstructor(set),
//           removeInstructor: InstructorStore.removeInstructor(set),
//           getTotalInstructors: InstructorStore.getTotalInstructors(get),
//         },
//         course: {
//           courses: courseStore.courses,
//           addCourse: courseStore.addCourse(set),
//           removeCourse: courseStore.removeCourse(set),
//           updateCourseStatus: courseStore.updateCourseStatus(set),
//           getAllPrice: courseStore.getAllPrice(get),
//         },
//       }),
//       {
//         name: "RootStore",
//         version: 2,
//       }
//     )
//   )
// );

// export default useRootStore;

import { create } from "zustand";
import { BearSlice, FishSlice } from "./bear";
import { createBearSlice } from "./bear";
import { createFishSlice } from "./fish";

const useBoundStore = create<BearSlice & FishSlice>()((...a) => ({
  ...createBearSlice(...a),
  ...createFishSlice(...a),
}));

export default useBoundStore;