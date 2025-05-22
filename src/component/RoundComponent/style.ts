import styled from "styled-components";
import tw from "twin.macro";

export const StyledBtns = styled.div`
    ${tw`
        flex
        w-full
        justify-center
        gap-3
    `}
    button{
        ${tw`
            border-none
            p-2
            rounded-md
            bg-blue-500
            text-white
            cursor-pointer
            w-[30%]
        `}
    }
    
    .back{
        ${tw`
            bg-gray-500
        `}
    }
`