import styled from "styled-components";
import tw from "twin.macro";


export const StyledContainer = styled.div`
    ${tw`
        flex
        flex-col
        items-center
        h-full
        
    `}
`

export const StyledBox = styled.div`
    ${tw`
        flex
        flex-col
        items-center
        justify-center
        h-full
        gap-2
        w-full
    `}
`

export const StyledExerCiseName = styled.div`
    ${tw`
        text-xl
        p-4
        w-full
        flex
        flex-col
        items-center
        bg-gray-300
        rounded-2xl
    `}
`

export const StyledTime = styled.p`
    ${tw`
        mt-5
    `}
`

export const StyledDot = styled.span`
    ${tw`
        w-[10px]
        h-[10px]
        rounded-full
    `}
`

export const StyledLevelBox = styled.div`
    ${tw`
        w-full
        p-4
        rounded-2xl
        bg-gray-300
        flex
        flex-col
        items-center
        gap-4
    `}
`

export const StyledLevel = styled.div`
    ${tw`
        flex
        gap-2
        items-center
        text-xl
        font-bold
        p-2
        bg-gray-500
        rounded-lg
        text-white
    `}
`