import { create } from "zustand";

interface Time {
    hours: number;
    minutes: number;
    seconds: number;
}

interface TimerStore {
    time: Time;
    setTime: (key: keyof Time, value: number) => void
    resetTime: () => void
}

export const useTimerStore = create<TimerStore>((set) => ({
    time: {hours: 0, minutes: 0, seconds: 0},
    setTime: (key, value) => 
        set((state) => ({
            time: {
                ...state.time,
                [key]: value
            }
        })),
        resetTime: () => 
            set(() => ({
                time: {hours:0, minutes: 0, seconds: 0}
            }))
}))