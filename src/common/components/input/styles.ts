import styled, { css } from 'styled-components'

export const StyledInputWrapper = styled.div`
    width: 100%;
    margin: 0.4rem 0;
    height: 7rem;
    color: ${({ theme }) => theme.colors.neutral.darkGrey};
`

export const StyledLabel = styled.label<{ isRequired: boolean }>`
    ${({ isRequired, theme }) =>
        isRequired &&
        css`
            &:after {
                content: '*';
                color: ${theme.colors.status.error};
                margin-left: 0.4rem;
            }
        `}
`

export const StyledInput = styled.input`
    width: 100%;
    margin: 0.4rem 0;
    padding: 0.8rem;
    border: 1px solid ${({ theme }) => theme.colors.neutral.darkGrey};
    color: ${({ theme }) => theme.colors.neutral.darkGrey};
    font-size: 1.3rem;
`
