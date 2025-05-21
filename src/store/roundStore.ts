import { create } from "zustand";

interface RoundState {
    selectedLevel: string
    setSelectedLevel: (level: string) => void
}

export const useRoundStore = create<RoundState>((set)=> ({
    selectedLevel: 'low',
    setSelectedLevel: (level) => set({selectedLevel: level})
}))