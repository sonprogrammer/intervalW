import styled from "styled-components";
import tw from "twin.macro";


export const StyledContainer = styled.div`
    ${tw`
        fixed
        inset-0
        bg-black
        bg-opacity-50
        flex
        items-center
        justify-center
        
    `}
`

export const StyledBox = styled.div`
    ${tw`
        bg-blue-100
        flex
        flex-col
        text-center
        items-center
        p-5
        rounded-lg
        w-[50%]
        relative
        min-h-[50%]
    `}
    @media(max-width: 640px){
        ${tw`
            w-[80%]
        `}
    }
`

export const StyledCloseBtn = styled.div`
    ${tw`
        absolute
        right-5
        top-4
        cursor-pointer
    `}
`

export const StyledSetRoundBox = styled.div`
    ${tw`
        p-2
        flex
        flex-col
        items-center
        gap-1
        max-h-[300px]
        overflow-y-auto
    `}
    
`

export const StyledRoundList = styled.div`
    ${tw`
        flex 
        w-[80%]
        justify-between 
        rounded-md 
        px-3
        p-2
        bg-gray-300
        border-gray-500
    `}
`

export const StyledAddBtn = styled.button`
    ${tw`
        mt-2
        bg-blue-300
        border-none
        py-2
        rounded-full
        w-[50%]
        cursor-pointer
    `}
    &:hover{
        ${tw`
            bg-blue-500
            text-white
        `}
    }
`

export const StyledTimer = styled.div`
    ${tw`
        p-5
        w-[80%]
    `}
`

export const StyledSaveBtn = styled.button`
    ${tw`
        bg-blue-500
        border-none
        p-3
        rounded-md
        mt-2
        text-white
        cursor-pointer
    `}
    &:hover{
        ${tw`
            bg-blue-700
        `}
    }
`

