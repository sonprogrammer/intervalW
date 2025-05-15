import { useState } from "react"
import { StyledContainer, StyledStop, StyledType } from "./style"
import NameModal from "./NameModal"
import startStore from "../../store/start"
import { Link } from "react-router-dom"


const MainBtnComponent = () => {
  const [modal, setModal] = useState(false)
  const { start, setStart } = startStore()

  const handleStartClick = () => {
    setStart(true)
    setModal(false)
  }

  const handleStopClick = () => {
    setStart(false)
  }


  const handleOpenModal = () => {
    setModal(true)
  }

  const handleCloseModal = () => {
    setModal(false)
  }


  return (
    <StyledContainer>

      {start ? 
        <StyledStop onClick={handleStopClick}>
          <p>
            stop
          </p>
        </StyledStop>
        :
        <>
          <StyledType isleft onClick={handleOpenModal}>
            <p>웨이트</p>
          </StyledType>

          <StyledType onClick={handleStartClick}>
            <Link to='/ongoing'>
              <p>유산소</p>
            </Link>
          </StyledType>

          {/* TODO 시작하려면 클릭하라고 설명적어놓기 */}
          {/* <StyledStart>Start</StyledStart> */}

          {modal && <NameModal closeModal={handleCloseModal} startClick={handleStartClick}/>}
        </>
      }


    </StyledContainer>
  )
}

export default MainBtnComponent
