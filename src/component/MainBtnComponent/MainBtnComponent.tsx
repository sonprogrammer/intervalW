import { StyledBox, StyledContainer, StyledStart } from "./style"


const MainBtnComponent = () => {
  return (
    <StyledContainer >
        <StyledBox>

        <div>
            <p>웨이트</p>    
        </div>
        <div>
            <p>유산소</p>    
        </div>
        <StyledStart>Start</StyledStart>
        </StyledBox>
    </StyledContainer>
  )
}

export default MainBtnComponent
