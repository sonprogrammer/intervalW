import { useState } from "react"
import { StyledContainer, StyledStop, StyledType } from "./style"
import NameModal from "./NameModal"
import {  useNavigate } from "react-router-dom"
import { useExerciseType } from "../../store/useExerciseType"
import useStart from "../../store/useStart"


const MainBtnComponent = () => {
  const [modal, setModal] = useState(false)
  const { start, setStart } = useStart()
  const { setType} = useExerciseType()

  const navigate = useNavigate()

  const handleStartClick = (select: string) => {
    setType(select)
    if(select === '유산소'){
      navigate('/ongoing')
    }
    setStart(true)
    setModal(false)
  }

  const handleStopClick = () => {
    setStart(false)
    setType('운동')
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

          <StyledType onClick={() => handleStartClick('유산소')}>
              <p>유산소</p>
          </StyledType>

          {/* TODO 시작하려면 클릭하라고 설명적어놓기 */}
          {/* <StyledStart>Start</StyledStart> */}

          {modal && <NameModal closeModal={handleCloseModal} startClick={() => handleStartClick('웨이트')}/>}
        </>
      }


    </StyledContainer>
  )
}

export default MainBtnComponent
