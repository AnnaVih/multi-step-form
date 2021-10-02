import React from 'react'
import { StyledError } from './styles'

interface ErrorMessageProps {
    error: string
}
export const ErrorMessage = ({ error }: ErrorMessageProps) => (
    <StyledError>{error}</StyledError>
)
