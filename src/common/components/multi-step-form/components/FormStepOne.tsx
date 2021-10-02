import { FieldValues, UseFormRegister } from 'react-hook-form'
import { GenericInputErrors } from '../../../types'
import { Input } from '../../input'
import { StyledButton, StyledStepFormView } from '../styles'

export const FormStepOne = ({
    isHidden,
    onNextClick,
    register,
    errors,
}: {
    isHidden: boolean
    onNextClick: () => void
    register: UseFormRegister<FieldValues>
    errors: GenericInputErrors
}): JSX.Element => (
    <StyledStepFormView isHidden={isHidden}>
        <Input
            label="Name"
            type="text"
            placeholder="type your name here ..."
            name="name"
            register={register}
            rules={{
                required: {
                    value: true,
                    message: 'This is a required field',
                },
            }}
            error={errors['name']?.message}
        />
        <Input
            label="Role"
            type="text"
            placeholder="type your role here ..."
            name="role"
            register={register}
        />
        <Input
            label="Email"
            type="email"
            placeholder="type your email here ..."
            name="email"
            register={register}
            rules={{
                required: {
                    value: true,
                    message: 'This is a required field',
                },
                pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: 'Enter a valid e-mail address',
                },
            }}
            error={errors['email']?.message}
        />
        <Input
            label="Password"
            type="password"
            placeholder="type your password here ..."
            name="password"
            register={register}
            rules={{
                required: {
                    value: true,
                    message: 'This is a required field',
                },
                pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{9,}$/,
                    message:
                        'Password must contain at least 9 characters, one uppercase, one lowercase, one number',
                },
            }}
            error={errors['password']?.message}
        />
        <StyledButton type="button" onClick={onNextClick}>
            Submit
        </StyledButton>
    </StyledStepFormView>
)
