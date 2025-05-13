import styled from "styled-components";
import tw from "twin.macro";



export const StyledContainer = styled.div`
    ${tw`
        w-full
        flex
        justify-center

    `}
    
`

export const StyledBox = styled.div`
    ${tw`
        flex
        bg-blue-700
        rounded-full
        flex
        m-2
        h-[300px]
        w-[300px]
        items-center
        justify-center
    `}
`

export const StyledStart = styled.h1`
    ${tw`
        absolute
    `}
`