import React from 'react'
import { StyledSuccessMessage } from './styles'

export const SuccessMessage: React.FC = ({ children }) => (
    <StyledSuccessMessage>{children}</StyledSuccessMessage>
)
