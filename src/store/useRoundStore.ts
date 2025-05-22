import { green, red, yellow } from '@mui/material/colors'
import {create} from 'zustand'

interface RoundState {
  selectedLevel: string
  setSelectedLevel: (level: string) => void
  hours: number
  minutes: number
  seconds: number
  setHours: (h: number) => void
  setMinutes: (m: number) => void
  setSeconds: (s: number) => void
  levelColor : Record<string, string>
}

export const useRoundStore = create<RoundState>((set) => ({
  selectedLevel: 'low',
  setSelectedLevel: (level) => set({ selectedLevel: level }),
  hours: 0,
  minutes: 0,
  seconds: 0,
  setHours: (h) => set({ hours: h }),
  setMinutes: (m) => set({ minutes: m }),
  setSeconds: (s) => set({ seconds: s }),
  levelColor: {
    low: yellow[500],
    medium: green[500],
    high: red[500]
  }
}))
