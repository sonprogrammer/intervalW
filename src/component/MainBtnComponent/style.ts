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

export const StyledStop = styled.div`
    ${tw`
        w-full
        h-full
        rounded-full
        flex
        items-center
        justify-center
        font-bold
        text-3xl
        text-white
        cursor-pointer
    `}
    animation: colorChange 1s infinite alternate;

    @keyframes colorChange{
    0%{
        background-color: black;
        }
    100%{
        background-color: red;
        }
    }
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
    
    a{
        text-decoration: none;
        color: white;
    }

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

export const StyledModalContainer = styled.div`
    ${tw`
        inset-0
        z-10
        fixed
        bg-black
        bg-opacity-50
        flex
        justify-center
        items-center
    `}
`

export const StyledModalBox = styled.div`
    ${tw`
        flex
        flex-col
        gap-5
        bg-blue-100
        w-[50%]
        p-3
        rounded-lg
        items-center
        relative
    `}
    @media(max-width: 640px){
            width: 70%;
        }
    p{
        ${tw`
            text-center
            font-bold
            text-xl
        `}
    }
    
    input{
        ${tw`
            p-2
            rounded-xl
            w-[80%]
            outline-blue-900
        `}
        
    }
    
    .close{
        ${tw`
            absolute
            right-3
            cursor-pointer
            h-[24px]
            w-[24px]
            rounded-full
        `}
        &:hover{
            ${tw`
                bg-blue-950
                text-white
            `}
        }
    }
`

export const StyledBtn = styled.div`
    ${tw`
        text-center
        flex
        justify-center
        bg-blue-900
        px-3
        py-2
        rounded-xl
        text-white
        cursor-pointer
    `}
`