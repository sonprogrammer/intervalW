import { StyledContainer } from "./style"
import { useTimerStore } from "../../store/useTimerStore"


const CurrentTimeComponent = () => {
    const seconds = useTimerStore(state => state.seconds)


  const formattedTime = (sec: number) => {
    const hour = String(Math.floor(sec/3600)).padStart(2,'0')
    const min = String(Math.floor((sec % 3600) / 60)).padStart(2, '0')
    const second = String(Math.floor(sec % 60)).padStart(2, '0')
    return `${hour} : ${min} : ${second}`
  }
  
  
  return (
    <StyledContainer>
        총 수행시간 {formattedTime(seconds)}
    </StyledContainer>
  )
}

export default CurrentTimeComponent
