import { Link } from 'react-router-dom'
import { StyledContainer } from './style'

const HeaderComponent = () => {
  return (
    <StyledContainer>
      <Link to='/'>
        <p>easy running</p>
      </Link>
    </StyledContainer>
  )
}

export default HeaderComponent
