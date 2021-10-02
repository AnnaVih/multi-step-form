import React from 'react'
import { StyledButton } from './styles'

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    type?: 'button' | 'submit' | 'reset'
}

export const Button: React.FC<ButtonProps> = ({ children, type, ...rest }) => {
    return (
        <StyledButton type={type} {...rest}>
            {children}
        </StyledButton>
    )
}
