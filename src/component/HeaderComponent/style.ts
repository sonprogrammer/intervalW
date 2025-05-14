import styled from 'styled-components'
import tw from 'twin.macro'


export const StyledContainer = styled.div`
    ${tw`
        bg-blue-900
        p-3
        py-4
        text-center
        text-2xl
    `}
    a{
        text-decoration: none;
        color: white;
        cursor: pointer;
    }
`