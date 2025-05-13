import styled from "styled-components";
import tw from "twin.macro";


export const StyledContainer = styled.div`
    ${tw`
        flex
        bg-blue-500
        text-white
        font-bold
        text-lg
    `}
`

export const StyledMenus = styled.p`
    ${tw`
        flex-1
        text-center
        cursor-pointer
        py-4
    `}
    &:hover{
        background-color: rgb(30 64 175 / var(--tw-bg-opacity, 1));
    }
`