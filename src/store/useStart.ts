import {create} from 'zustand'



interface StartState {
    start: boolean,
    setStart: (value: boolean) => void
}


const useStart = create<StartState>((set) => ({
    start: false,
    setStart: (value:boolean) => set({start: value})
}))

export default useStart