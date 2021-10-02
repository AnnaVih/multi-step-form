import { AppState } from './types'

export const setFormActiveStep = (
    state: AppState,
    payload: { activeStep: number }
): AppState => {
    return {
        appData: {
            ...state.appData,
            formConfig: {
                ...state.appData.formConfig,
                activeStep: payload.activeStep,
            },
        },
    }
}

export const completeFormAllSteps = (
    state: AppState,
    payload: { activeStep: number }
): AppState => {
    const updatedSteps = state.appData.formConfig.steps.map((step) => ({
        ...step,
        isCompleted: true,
    }))
    return {
        appData: {
            ...state.appData,
            formConfig: {
                ...state.appData.formConfig,
                steps: updatedSteps,
                activeStep: payload.activeStep + 1,
            },
        },
    }
}

export const completeFormActiveStep = (
    state: AppState,
    payload: { activeStep: number }
): AppState => {
    const steps = state.appData.formConfig.steps
    const activeStepIndex = steps.findIndex(
        (el) => el.id === payload.activeStep
    )

    const updatedStep = { ...steps[activeStepIndex], isCompleted: true }
    const updatedSteps = [
        ...steps.slice(0, activeStepIndex),
        updatedStep,
        ...steps.slice(activeStepIndex + 1),
    ]

    return {
        appData: {
            ...state.appData,
            formConfig: {
                ...state.appData.formConfig,
                activeStep: payload.activeStep + 1,
                steps: updatedSteps,
            },
        },
    }
}
