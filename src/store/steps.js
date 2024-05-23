import { create } from "zustand";

export const useStepsStore = create()((set) => ({
    steps: 0,
    setSteps: (steps) => set({ steps: steps }),
}));
