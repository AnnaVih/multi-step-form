import styled from 'styled-components'
import { Button, ButtonProps } from '../button'

export const StyledMultiStepForm = styled.form`
    width: 50%;
    max-width: 50rem;
    margin: 3rem auto 0;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`

export const StyledStepFormView = styled.div<{ isHidden: boolean }>`
    padding: 1.6rem;
    display: flex;
    justify-content: space-between;
    min-height: 12.3rem;
    flex-direction: column;
    display: ${({ isHidden }) => isHidden && 'none'};
`

export const StyledButton = styled(Button)<ButtonProps>`
    align-self: flex-end;
`
