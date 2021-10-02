import React from 'react'
import { StyledStep, StyledStepper } from './styles'
import { Step } from '../../types'

interface StepperProps {
    steps: Step[]
    activeStep: number
    onStepClick: (id: number) => void
}

export const Stepper = ({
    steps,
    activeStep,
    onStepClick,
}: StepperProps): JSX.Element => {
    return (
        <StyledStepper>
            {steps.map((step) => (
                <StyledStep
                    onClick={() => onStepClick(step.id)}
                    type="button"
                    key={step.id}
                    isActive={step.id === activeStep}
                    isDisabled={!step.isCompleted}
                    disabled={!step.isCompleted}
                >
                    {step.name}
                </StyledStep>
            ))}
        </StyledStepper>
    )
}
