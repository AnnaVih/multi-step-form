import styled from 'styled-components'

export const StyledStepper = styled.div`
    width: 100%;
    display: flex;
    align-items: stretch;
    justify-content: space-evenly;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`

export const StyledStep = styled.button<{
    isActive: boolean
    isDisabled: boolean
}>`
    font-weight: 500;
    font-size: 1.6rem;
    height: 3rem;
    width: 100%;
    cursor: ${({ isDisabled }) => !isDisabled && 'pointer'};
    color: ${({ isActive, theme, isDisabled }) => {
        if (isActive) return theme.colors.neutral.white
        if (isDisabled) return theme.colors.neutral.darkGrey
        return theme.colors.neutral.darkGrey
    }};
    border: 0.5px solid
        ${({ isActive, theme }) => {
            if (isActive) return theme.colors.status.active
            return theme.colors.neutral.darkGrey
        }};
    background-color: ${({ isActive, theme, isDisabled }) => {
        if (isActive) return theme.colors.status.active
        if (isDisabled) return theme.colors.status.disabled
        return theme.colors.neutral.white
    }};
`
