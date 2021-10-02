import { useForm } from 'react-hook-form'
import { Stepper } from '../stepper'
import { useAppState } from '../../multi-step-form-state'
import { SuccessMessage } from '../success-message'
import { StyledMultiStepForm } from './styles'
import * as actionTypes from '../../multi-step-form-state'
import { FormStepOne, FormStepTwo } from './components'

type FormValues = {
    name: string
    role: string
    email: string
    password: string
    productUpdates: boolean
    otherProductsUpdates: boolean
}

export const MultiStepForm = (): JSX.Element => {
    const {
        appData: { formConfig },
        appDispatch,
    } = useAppState()

    const {
        handleSubmit,
        register,
        trigger,
        formState: { errors },
    } = useForm({ mode: 'onBlur' })

    const onNextClickHandler = async () => {
        const isValid = await trigger()
        if (isValid) {
            appDispatch({
                type: actionTypes.COMPLETE_FORM_ACTIVE_STEP,
                payload: {
                    activeStep: formConfig.activeStep,
                },
            })
        }
    }

    const onStepClickHandler = (stepId: number) => {
        appDispatch({
            type: actionTypes.SET_FORM_ACTIVE_STEP,
            payload: {
                activeStep: stepId,
            },
        })
    }

    const onSubmitHandler = (data: FormValues) => {
        appDispatch({
            type: actionTypes.COMPLETE_FORM_ALL_STEPS,
            payload: {
                activeStep: formConfig.activeStep,
            },
        })
        console.log(JSON.stringify(data))
    }

    const MultiStepFormView = (): JSX.Element => (
        <>
            {formConfig.activeStep >= 0 && (
                <FormStepOne
                    isHidden={formConfig.activeStep !== 0}
                    onNextClick={onNextClickHandler}
                    register={register}
                    errors={errors}
                />
            )}
            {formConfig.activeStep >= 1 && (
                <FormStepTwo
                    isHidden={formConfig.activeStep !== 1}
                    register={register}
                />
            )}
            {formConfig.activeStep >= 2 && (
                <SuccessMessage>
                    <div>&#10004;</div>
                    Check out console log to see a submited data and then lets
                    play a table tennis &#x1F3D3;
                </SuccessMessage>
            )}
        </>
    )

    return (
        <StyledMultiStepForm onSubmit={handleSubmit(onSubmitHandler)}>
            <Stepper
                onStepClick={onStepClickHandler}
                steps={formConfig.steps}
                activeStep={formConfig.activeStep}
            />
            <MultiStepFormView />
        </StyledMultiStepForm>
    )
}
