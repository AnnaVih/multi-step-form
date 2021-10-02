import React from 'react'
import { StyledButton } from './styles'

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {}

export const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
    return <StyledButton {...rest}>{children}</StyledButton>
}
