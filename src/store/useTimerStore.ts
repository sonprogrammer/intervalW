import { create } from "zustand";



interface TimerState {
    seconds: number
    startTimer: () => void
    stopTimer: () => void
    resetTimer: () => void
}


let interval: NodeJS.Timeout | null = null

export const useTimerStore = create<TimerState>((set, get) => ({
    seconds: 0,
    startTimer: () => {
        if(interval) return
        interval = setInterval(() => {
            set(state => ({seconds: state.seconds + 1}))
        }, 1000)
    },
    stopTimer: () => {
        if(interval){
            clearInterval(interval)
            interval = null
        }
    },
    resetTimer: () => {
        if(interval){
            clearInterval(interval)
            interval = null
        }
        set({seconds: 0})
    }
}))