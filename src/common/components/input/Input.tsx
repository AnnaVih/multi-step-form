import React from 'react'
import { FieldValues, RegisterOptions, UseFormRegister } from 'react-hook-form'
import { ErrorMessage } from '../error-message'
import { StyledInput, StyledInputWrapper, StyledLabel } from './styles'

interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
    type: string
    name: string
    register?: UseFormRegister<FieldValues>
    label?: string
    rules?: RegisterOptions
    error?: string
}

export const Input = ({
    label,
    type,
    name,
    register,
    error,
    rules,
    ...rest
}: InputProps): JSX.Element => (
    <StyledInputWrapper>
        <StyledLabel htmlFor={name} isRequired={!!rules?.required}>
            {label}
        </StyledLabel>
        <StyledInput id={name} type={type} {...register && register(name, rules)} />
        {error && <ErrorMessage error={error} />}
    </StyledInputWrapper>
)
