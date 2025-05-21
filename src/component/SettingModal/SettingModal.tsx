import { Box, FormControl, FormControlLabel, InputLabel, NativeSelect, Radio, RadioGroup } from "@mui/material"
import { StyledAddBtn, StyledBox, StyledCloseBtn, StyledContainer, StyledRoundList, StyledSaveBtn, StyledSetRoundBox } from "./style"
import { useState } from "react"
import { RoundComponent } from "../RoundComponent"



const SettingModal = () => {
  // const [headerName, setHeaderName] = useState<string>('select type to save')
  const [headerName, setHeaderName] = useState<string>('유산소')
  const [roundModal, setRoundModal] = useState<boolean>(false)

  const [roundList, setRoundList] = useState<{ time: number; level: string }[]>([])

  const formatedTime = (totalSeconds: number) => {
    const h = Math.floor(totalSeconds/3600)
    const m = Math.floor((totalSeconds%3600) / 60)
    const s = totalSeconds % 60
    return `${h > 0 ? h + "시 " : ""}${m > 0 ? m + "분 " : ""}${s}초`

  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHeaderName(event.target.value)
  }

  const handleAddRound = (round: {time: number, level: string}) => {
    setRoundList(prev=> [...prev, round])
    setRoundModal(false)
  }

  console.log('roundlist', roundList)
  return (
    <StyledContainer className="me">
      <StyledBox className="box">

        {/* //*세팅하는 상단 부분 인풋이랑 헤더 */}
        <StyledCloseBtn>
          X
        </StyledCloseBtn>
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
          <div className="flex flex-col w-[50%]">

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
                    <option value={i + 1}>{i + 1}라운드</option>
                  ))}
                </NativeSelect>
              </FormControl>
            </Box>

            {/* //*라운드 구성 */}
            <StyledSetRoundBox className="border-2 ">
              <p>라운드 구성</p>
              {!roundModal &&roundList.length > 0 && roundList.map(a => (
                <StyledRoundList key={a.time} className="border-2">
                  <p>
                    {formatedTime(a.time)}
                  </p>
                  <p className="font-bold text-red-700 pl-10">{a.level}</p>
                </StyledRoundList>
              ))}
            {/* TODO 라운드 컴포넌트 추가 */}
            {roundModal &&
              <div>
                <RoundComponent addRound={handleAddRound} />
              </div>
            }
            {!roundModal && <StyledAddBtn onClick={() => setRoundModal(!roundModal)}>
                + 추가
              </StyledAddBtn>}
              
            </StyledSetRoundBox>
          </div>
          :
          <div className="flex flex-col w-[50%]">
            {/* TODO 이거 클릭하면 시간 설정창 모달창 나오게 하기 */}
            <p>시간 설정</p>
          </div>
        }

        {/* TODO이거 클릭시 라운드 횟수, 라운드 구성 로컬스토리지에 저장 */}
        <StyledSaveBtn>save</StyledSaveBtn>

      </StyledBox>
    </StyledContainer>
  )
}

export default SettingModal
