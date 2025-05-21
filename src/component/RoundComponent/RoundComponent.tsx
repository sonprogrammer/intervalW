import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material"
import { TimerForSetting } from "../TimerForSetting"
import { green, red, yellow } from "@mui/material/colors"
import { useRoundStore } from "../../store/roundStore"
import { useState } from "react"

interface RoundComponentProps {
    addRound: (data: {time: number, level:string}) => void
}
const RoundComponent = ({addRound}: RoundComponentProps) => {
    const {selectedLevel, setSelectedLevel } = useRoundStore()
    const [hours, setHours] = useState<number>(0)
  const [minutes, setMinutes] = useState<number>(0)
  const [seconds, setSeconds] = useState<number>(0)

  const totalSeconds = hours * 3600 + minutes * 60 + seconds

    return (
        <div>
            <TimerForSetting 
                hours={hours}
                minutes={minutes}
                seconds={seconds}
                onChangeHours={setHours}
                onChangeMinutes={setMinutes}
                onChangeSeconds={setSeconds}
            />
            <div>
                <FormControl>
                    <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-controlled-radio-buttons-group"
                        name="controlled-radio-buttons-group"
                        value={selectedLevel}
                        onChange={(e)=> setSelectedLevel(e.target.value)}
                        row
                    >
                        <FormControlLabel value="low"
                            control={
                                <Radio
                                    sx={{
                                        color: yellow[500],
                                        '&.Mui-checked': {
                                            color: yellow[500]
                                        }
                                    }} />
                            }
                            label="Low" />

                        <FormControlLabel value="medium"
                            control={
                                <Radio
                                    sx={{
                                        color: green[500],
                                        '&.Mui-checked': {
                                            color: green[500]
                                        }
                                    }} />
                            }
                            label="Medium" />
                        <FormControlLabel value="high"
                            control={
                                <Radio
                                    sx={{
                                        color: red[500],
                                        '&.Mui-checked': {
                                            color: red[500]
                                        }
                                    }} />
                            }
                            label="High" />
                    </RadioGroup>
                </FormControl>
            </div>
            <button onClick={()=>addRound({time:totalSeconds, level:selectedLevel})}>완료</button>
        </div>

    )
}

export default RoundComponent
