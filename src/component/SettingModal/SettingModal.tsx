import { Checkbox, FormControlLabel, RadioGroup } from "@mui/material"
import { StyledBox, StyledContainer } from "./style"


const SettingModal = () => {
  return (
    <StyledContainer>
        <StyledBox>
        <RadioGroup row>
            <FormControlLabel required control={<Checkbox />} label="웨이트" />
            <FormControlLabel required control={<Checkbox />} label="유산소" />
        </RadioGroup>

            <h1>이름적혀야함</h1>
        </StyledBox>
    </StyledContainer>
  )
}

export default SettingModal
