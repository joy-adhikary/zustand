import { StateCreator } from 'zustand';
import { BearSlice, FishSlice } from './bear';

export const createFishSlice: StateCreator<BearSlice & FishSlice,[],[],FishSlice> = (set,get) => ({
  fishes: 0,
  addFish: () => set((state) => ({ fishes: state.fishes + 1 })),
  removeFish: () => set((state) => ({ fishes: state.fishes - 1 })),
  getFishes: () => get().fishes,
});
