import React from 'react'
import { FieldValues, UseFormRegister } from 'react-hook-form'
import { StyedCheckboxWrapper, StyledCheckbox } from './styles'

interface CheckboxProps extends React.HTMLAttributes<HTMLInputElement> {
    label: string
    type: string
    name: string
    register?: UseFormRegister<FieldValues>
}

export const Checkbox = ({
    label,
    name,
    type,
    register,
    ...rest
}: CheckboxProps): JSX.Element => (
    <StyedCheckboxWrapper>
        <StyledCheckbox id={name} type={type} {...register && register(name)} {...rest} />
        <label htmlFor={name}>{label}</label>
    </StyedCheckboxWrapper>
)
