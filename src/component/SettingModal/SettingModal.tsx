import { FormControl, FormControlLabel, Radio, RadioGroup } from "@mui/material"
import { StyledBox, StyledContainer } from "./style"
import { useState } from "react"



const SettingModal = () => {
  const [headerName, setHeaderName] = useState<string>('select type to save')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHeaderName(event.target.value)
  }
  
  return (
    <StyledContainer>
      <StyledBox>
        <h1>{headerName}</h1>
        <FormControl>
          <RadioGroup row
            aria-labelledby="demo-radio-buttons-group-label"
            name="type"
            onChange={handleChange}
          >
            <FormControlLabel value="웨이트" control={<Radio />} label="웨이트" />
            <FormControlLabel value="유산소" control={<Radio />} label="유산소" />
          </RadioGroup>
        </FormControl>

      {/* TODO 웨이트선택하면 시간설정만 가능 유산소는 목표라운드, 라운드 구성하면댐  */}
      {headerName === '유산소' ? 
        <div>
            
        </div>
      :
        <div>
          {/* TODO 이거 클릭하면 시간 설정창 모달창 나오게 하기 */}
          <p>시간 설정</p>
        </div>
      }
      
      </StyledBox>
    </StyledContainer>
  )
}

export default SettingModal
