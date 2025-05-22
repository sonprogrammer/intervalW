import { create } from "zustand";



interface TypeState {
    type: string
    setType: (select:string) => void
}


export const useExerciseType = create<TypeState>((set) => ({
    type: '운동',
    setType: (select) => set({type: select})
}))