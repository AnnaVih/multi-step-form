import styled from 'styled-components'

export const StyledSuccessMessage = styled.div`
    padding: 1.6rem;
    min-height: 5rem;
    text-align: center;
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.status.success};
`
