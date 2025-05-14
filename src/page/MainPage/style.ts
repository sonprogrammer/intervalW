import styled from "styled-components";
import tw from "twin.macro";


export const StyledContainer = styled.div`
    ${tw`
        h-full
        flex
        flex-col
    `}
`

export const StyledTime = styled.div`
    ${tw`
        mt-3
    `}
`

export const StyledBtn = styled.div`
    ${tw`
        flex
        flex-col
        gap-5
        justify-center
        flex-1
        items-center
    `}
    .text{
        text-decoration: underline;
        cursor: pointer;
        font-weight: bold;
    }
`