import { create } from "zustand";
import { BearSlice, FishSlice } from "./bear";
import { createBearSlice } from "./bear";
import { createFishSlice } from "./fish";
import { devtools } from "zustand/middleware";

const useBoundStore = create<BearSlice & FishSlice>()(
  devtools(
    (...a) => ({
      ...createBearSlice(...a),
      ...createFishSlice(...a),
    }),
    {
      name: "bear-fish-store",
    }
  )
);

export default useBoundStore;
