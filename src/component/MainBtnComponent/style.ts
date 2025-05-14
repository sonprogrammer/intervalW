import styled from "styled-components";
import tw from "twin.macro";


interface StyledTypeProps {
    isleft?: boolean;
  }
  

export const StyledContainer = styled.div`
    ${tw`
       flex
        w-[300px]
        h-[300px]
        rounded-full
    `}
    
`

export const StyledType = styled.div<StyledTypeProps>`
    ${tw`
        flex-1
        bg-blue-500
        flex
        justify-center
        items-center
        font-bold
        text-white
        cursor-pointer
    `}
    border-radius: ${({ isleft }) =>
    isleft ? "150px 0 0 150px" : "0 150px 150px 0"};
    

    &:hover{
        transition: 0.5s all;
        scale: 1.05;
        background-color: #003399;
    }
    
`

export const StyledStart = styled.h1`
    ${tw`
        // absolute
        
    `}
`