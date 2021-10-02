import styled from 'styled-components'

export const StyedCheckboxWrapper = styled.div`
    width: 100%;
    margin: 0.4rem 0;
    color: ${({ theme }) => theme.colors.neutral.darkGrey};
`

export const StyledCheckbox = styled.input`
    width: 1.2rem;
    height: 1.2rem;
    margin-right: 0.4rem;
    flex-shrink: 0;
`
