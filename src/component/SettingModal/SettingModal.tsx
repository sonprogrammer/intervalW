import { Box, FormControl, FormControlLabel, InputLabel, NativeSelect, Radio, RadioGroup } from "@mui/material"
import { StyledAddBtn, StyledBox, StyledCloseBtn, StyledContainer, StyledRoundList, StyledSaveBtn, StyledSetRoundBox, StyledTimer } from "./style"
import { useState } from "react"
import { RoundComponent } from "../RoundComponent"
import { TimerForSetting } from "../TimerForSetting"


interface SettingModalProps {
  closeModal: () => void
}

const SettingModal = ({closeModal}: SettingModalProps) => {
  const [headerName, setHeaderName] = useState<string>('웨이트')
  const [roundModal, setRoundModal] = useState<boolean>(false)

  const [roundList, setRoundList] = useState<{ time: number; level: string; color: string }[]>([])

  const formatedTime = (totalSeconds: number) => {
    const h = Math.floor(totalSeconds/3600)
    const m = Math.floor((totalSeconds%3600) / 60)
    const s = totalSeconds % 60
    return `${h > 0 ? h + "H " : ""}${m > 0 ? m + "M " : ""}${s}sec`

  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHeaderName(event.target.value)
  }

  const handleAddRound = (round: {time: number, level: string, color: string}) => {
    setRoundList(prev=> [...prev, round])
    setRoundModal(false)
  }
  console.log('roundlist',roundList)

  const handleBackToSetting = () => {
    setRoundModal(false)
  }


  return (
    <StyledContainer className="me" onClick={closeModal}>
      <StyledBox className="box" onClick={(e) => e.stopPropagation()}>

        {/* //!세팅하는 상단 부분 인풋이랑 헤더 */}
        <StyledCloseBtn onClick={closeModal}>
          X
        </StyledCloseBtn>
        <h1>{headerName}</h1>
        <FormControl>
          <RadioGroup row
            aria-labelledby="demo-radio-buttons-group-label"
            name="type"
            onChange={handleChange}
            value={headerName}
          >
            <FormControlLabel value="웨이트" control={<Radio />} label="웨이트" />
            <FormControlLabel value="유산소" control={<Radio />} label="유산소" />
          </RadioGroup>
        </FormControl>

        {/* TODO 웨이트선택하면 시간설정만 가능 유산소는 목표라운드, 라운드 구성하면댐  */}
        {headerName === '유산소' ?
          <div className="flex flex-col w-full">

            {/* //*목표라운드 */}
            <Box className='hi' >
              <FormControl fullWidth>
                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                  목표 라운드
                </InputLabel>
                <NativeSelect
                  defaultValue={1}
                  inputProps={{
                    name: 'round',
                    id: 'uncontrolled-native',
                  }}
                >
                  {Array.from({ length: 10 }, (_, i) => (
                    <option key={i} value={i + 1}>{i + 1}라운드</option>
                  ))}
                </NativeSelect>
              </FormControl>
            </Box>

            {/* //*라운드 구성 */}
            <StyledSetRoundBox className="border-2 ">
              <p>라운드 구성</p>
              {!roundModal &&roundList.length > 0 && roundList.map((a, i) => (
                <StyledRoundList key={i} className="border-2" >
                  <p>
                    {formatedTime(a.time)}
                  </p>
                  <p style={{color: `${a.color}`, fontWeight: 'bold'}}>{a.level}</p>
                </StyledRoundList>
              ))}
            {/* TODO 라운드 컴포넌트 추가 */}
            {roundModal &&
              <div className="flex justify-center">
                <RoundComponent addRound={handleAddRound} goBack={handleBackToSetting}/>
              </div>
            }
            {!roundModal && <StyledAddBtn onClick={() => setRoundModal(!roundModal)}>
                + 추가
              </StyledAddBtn>}
              
            </StyledSetRoundBox>
            {!roundModal &&
              <StyledSaveBtn>save</StyledSaveBtn>
            }
          </div>
          :
          <StyledTimer className="flex flex-col border-2">
            {/* TODO 이거 클릭하면 시간 설정창 모달창 나오게 하기 */}
            <p>시간 설정</p>
            <TimerForSetting />
            <StyledSaveBtn>save</StyledSaveBtn>
          </StyledTimer>
        }
        

      </StyledBox>
    </StyledContainer>
  )
}

export default SettingModal
