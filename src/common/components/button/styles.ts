import styled from 'styled-components'

export const StyledButton = styled.button`
    background: ${({ theme }) => theme.colors.status.success};

    color: ${({ theme }) => theme.colors.neutral.white};
    border: none;
    padding: 0.8rem;
    font-size: 1.6rem;
    cursor: pointer;
    appearance: none;
    margin: 0;
`
