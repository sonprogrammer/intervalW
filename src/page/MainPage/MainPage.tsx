
import { useState } from 'react'
import { MainBtnComponent, SettingModal } from '../../component'
import CurrentTimeComponent from '../../component/CurrentTimeComponent/CurrentTimeComponent'
import { StyledBtn, StyledContainer, StyledTime } from './style'

const MainPage = () => {
  const [settingModal, setSettingModal] = useState<boolean>(false)

  const handleOpenModal = () => {
    setSettingModal(true)
  }
  return (
    <StyledContainer>

        <StyledTime>
          <CurrentTimeComponent />
        </StyledTime>
        
        <StyledBtn>
          {/* <p>start/stop</p> */}
          {/* TODO둘중하나 누르면 stop버튼으로 교체 아니면 위에 따로 버튼을 만들거나 */}
          <MainBtnComponent />
            <p className='text' onClick={handleOpenModal}>setting</p>
        </StyledBtn>

    {settingModal && <SettingModal />}
        
    </StyledContainer>
  )
}

export default MainPage
