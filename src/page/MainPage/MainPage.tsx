
import { useState } from 'react'
import { MainBtnComponent, SettingModal } from '../../component'
import CurrentTimeComponent from '../../component/CurrentTimeComponent/CurrentTimeComponent'
import { StyledBtn, StyledContainer, StyledTime } from './style'
import useStart from '../../store/useStart'

const MainPage = () => {
  const [settingModal, setSettingModal] = useState<boolean>(false)
  // const [descrip, setDescrip] = useState<boolean>(false)

  const { start } = useStart()

  const handleOpenModal = () => {
    setSettingModal(true)
  }


  const handleCloseModal =() => {
    setSettingModal(false)
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
            {!start && 
              <p className='text-[12px]'>To start, click above button</p>
            }
        </StyledBtn>

    {settingModal && <SettingModal closeModal={handleCloseModal} />}

        
    </StyledContainer>
  )
}

export default MainPage
