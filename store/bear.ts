import { StateCreator } from 'zustand';

export interface BearSlice {
    bears: number;
    addBear: () => void;
    eatFish: () => void;
}

export interface FishSlice {
    fishes: number;
    addFish: () => void;
}

export const createBearSlice: StateCreator<BearSlice & FishSlice, [], [], BearSlice> = (set) => ({
    bears: 0,
    addBear: () => set((state) => ({ bears: state.bears + 1 })),
    eatFish: () => set((state) => ({ fishes: state.fishes - 1 })),
});

