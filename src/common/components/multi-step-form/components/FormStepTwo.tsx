import { FieldValues, UseFormRegister } from 'react-hook-form'
import { Checkbox } from '../../checkbox'
import { StyledButton, StyledStepFormView } from '../styles'

export const FormStepTwo = ({
    isHidden,
    register,
}: {
    isHidden: boolean
    register: UseFormRegister<FieldValues>
}): JSX.Element => (
    <StyledStepFormView isHidden={isHidden}>
        <Checkbox
            label="Receive updates abour our product by email"
            type="checkbox"
            name="productUpdates"
            register={register}
        />
        <Checkbox
            label="Receive communication by email for other products created by our team"
            type="checkbox"
            name="otherProductsUpdates"
            register={register}
        />
        <StyledButton type="submit">Submit</StyledButton>
    </StyledStepFormView>
)
