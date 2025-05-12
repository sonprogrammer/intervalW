
import HeaderComponent from '../../component/HeaderComponent/HeaderComponent'
import { Outlet } from 'react-router-dom'
import FooterComponent from '../../component/FooterComponent/FooterComponent'
import { StyledContainer, StyledFooter, StyledHeader, StyledOutlet } from './style'


const LayoutPage = () => {
  return (
    <StyledContainer>

      <StyledHeader>
        <HeaderComponent />
      </StyledHeader>
      
      <StyledOutlet>
        <Outlet />
      </StyledOutlet>
      
      <StyledFooter>
        <FooterComponent />
      </StyledFooter>

    </StyledContainer>
  )
}

export default LayoutPage
