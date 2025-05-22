import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material"
import { TimerForSetting } from "../TimerForSetting"
import { green, red, yellow } from "@mui/material/colors"
import { useRoundStore } from "../../store/useRoundStore"
import { StyledBtns } from "./style"

interface RoundComponentProps {
    addRound: (data: {time: number, level:string, color: string}) => void
    goBack: () => void
}
const RoundComponent = ({addRound, goBack}: RoundComponentProps) => {
    const {
        selectedLevel,
        setSelectedLevel,
        hours,
        minutes,
        seconds,
        levelColor
      } = useRoundStore();

  

  const totalSeconds = hours * 3600 + minutes * 60 + seconds

    return (
        <div>
            <TimerForSetting />
            <div>
                <FormControl>
                    <FormLabel id="demo-controlled-radio-buttons-group" sx={{marginTop: 2}}>
                        Level
                    </FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-controlled-radio-buttons-group"
                        name="controlled-radio-buttons-group"
                        value={selectedLevel}
                        onChange={(e)=> setSelectedLevel(e.target.value)}
                        row
                        sx={{display:'flex', justifyContent:'center'}}
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
            <StyledBtns>
                <button className="back" onClick={goBack}>뒤로가기</button>
                <button 
                    onClick={() => 
                        addRound({time:totalSeconds, level:selectedLevel, color:levelColor[selectedLevel]})}>
                완료
                </button>
            </StyledBtns>
        </div>

    )
}

export default RoundComponent
