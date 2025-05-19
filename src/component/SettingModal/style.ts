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
    `}
`

export const StyledCloseBtn = styled.div`
    ${tw`
        absolute
        right-5
        top-4
        cursor-pointer
    `}
`