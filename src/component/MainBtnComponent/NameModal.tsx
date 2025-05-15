import { useState } from "react"
import { StyledBtn, StyledModalBox, StyledModalContainer } from "./style"


interface NameModalProps{
    closeModal: () => void
    startClick: () => void
} 

const NameModal = ({closeModal, startClick} : NameModalProps) => {
    const [targetName, setTargetName] = useState('')

    const handleSubmit = () => {
        // TODO서버로 오늘 타켓 부위 전송
        if(!targetName.trim()){
            alert('type your today target')
            return
        }
        startClick()
    }

  return (
    <StyledModalContainer onClick={closeModal}>
        <StyledModalBox onClick={e => e.stopPropagation()}>
            <p className="close" onClick={closeModal}>X</p>
            <p>Today's Workout</p>
            <input 
                type="text" 
                name='target' 
                value={targetName}
                onChange={e=>setTargetName(e.target.value)}
                placeholder="e.g 가슴 or 등 etc"/>
            <StyledBtn onClick={handleSubmit}>Submit and Start Timer</StyledBtn>
        </StyledModalBox>
    </StyledModalContainer>
  )
}

export default NameModal
