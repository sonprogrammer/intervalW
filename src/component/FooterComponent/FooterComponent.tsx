
import { StyledContainer, StyledMenus } from "./style"


const FooterComponent = () => {
  return (
    <StyledContainer>
      {/* TODO아이콘으로 바꾸기  */}
        <StyledMenus to="/">home</StyledMenus>
        <StyledMenus to="/record">record</StyledMenus>

        <StyledMenus to="/ongoin">ongoing</StyledMenus>

    </StyledContainer>
  )
}

export default FooterComponent
