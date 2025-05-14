import { Link } from "react-router-dom";
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

export const StyledMenus = styled(Link)`
    ${tw`
        flex-1
        text-center
        cursor-pointer
        text-white
        no-underline
        py-4
    `}
    &:hover{
        background-color: black;
    }
`