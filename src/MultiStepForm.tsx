import React from 'react'
import { useForm } from 'react-hook-form'
import * as actionTypes from './common/multi-step-form-state'
import { Stepper } from './common/components/stepper'
import { useAppState } from './common/multi-step-form-state'
import { StyledMultiStepForm, StyledStepFormView, StyledButton } from './styles'
import { StyledSuccessMessage } from './common/components/success-message/styles'

export const MultiStepForm = () => {
    const {
        appData: { formConfig },
        appDispatch,
    } = useAppState()
    const { handleSubmit } = useForm()

    const onNextClickHandler = () => {
        appDispatch({
            type: actionTypes.COMPLETE_FORM_ACTIVE_STEP,
            payload: {
                activeStep: formConfig.activeStep,
            },
        })
    }

    const onStepClickHandler = (stepId: number) => {
        appDispatch({
            type: actionTypes.SET_FORM_ACTIVE_STEP,
            payload: {
                activeStep: stepId,
            },
        })
    }

    const onSubmitHandler = (data: any) => {
        appDispatch({
            type: actionTypes.COMPLETE_FORM_ALL_STEPS,
            payload: {
                activeStep: formConfig.activeStep,
            },
        })
    }

    const MultiStepFormView = (): JSX.Element => (
        <>
            {formConfig.activeStep >= 0 && (
                <FormStepOne
                    isHidden={formConfig.activeStep !== 0}
                    onNextClick={onNextClickHandler}
                />
            )}
            {formConfig.activeStep >= 1 && (
                <FormStepTwo isHidden={formConfig.activeStep !== 1} />
            )}
            {formConfig.activeStep >= 2 && (
                <StyledSuccessMessage>
                    <div>&#10004;</div>
                    Check out console log to see a submited data, then lets play
                    a table tennis &#x1F3D3;
                </StyledSuccessMessage>
            )}
        </>
    )

    return (
        <>
            <StyledMultiStepForm onSubmit={handleSubmit(onSubmitHandler)}>
                <Stepper
                    onStepClick={onStepClickHandler}
                    steps={formConfig.steps}
                    activeStep={formConfig.activeStep}
                />
                <MultiStepFormView />
            </StyledMultiStepForm>
        </>
    )
}

const FormStepOne = ({
    isHidden,
    onNextClick,
}: {
    isHidden: boolean
    onNextClick: () => void
}) => {
    return (
        <StyledStepFormView isHidden={isHidden}>
            <p>User</p>
            <StyledButton onClick={onNextClick}>Submit</StyledButton>
        </StyledStepFormView>
    )
}

const FormStepTwo = ({ isHidden }: { isHidden: boolean }) => {
    return (
        <StyledStepFormView isHidden={isHidden}>
            <p>Privacy</p>
            <StyledButton>Submit</StyledButton>
        </StyledStepFormView>
    )
}
