import { CurrentTimeComponent } from "../../component"
import { useExerciseType } from "../../store/useExerciseType"
import { useRoundStore } from "../../store/useRoundStore"
import { StyledBox, StyledContainer, StyledDot, StyledExerCiseName, StyledLevel, StyledLevelBox, StyledTime } from "./style"



const OngoinPage = () => {
  const { type } = useExerciseType()
  const { selectedLevel, levelColor } = useRoundStore()

  return (
    <StyledContainer>
      <CurrentTimeComponent />
      <StyledBox>

        <StyledExerCiseName className="border-2">
          <p>{type} 수행 시간</p>
          <StyledTime>00 : 00 : 00</StyledTime>
        </StyledExerCiseName>
        {/* TODO점이랑 레벨명 나오게 */}
        <StyledLevelBox className="border-2">
          <p style={{ fontWeight: 'bold', fontSize: '28px' }}>Current Level</p>
          <StyledLevel>
            <StyledDot style={{ backgroundColor: `${levelColor[selectedLevel]}`, width: '10px', height: '10px' }}></StyledDot>
            <p>{selectedLevel}</p>
          </StyledLevel>
          <p>현재 레벨남은 시간</p>
          <p>00 : 00 : 00</p>
        </StyledLevelBox>

      </StyledBox>
    </StyledContainer>
  )
}

export default OngoinPage
