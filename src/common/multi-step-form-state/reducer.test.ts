import { AppState, AppAction } from './types'
import { appReducer } from './reducer'

const steps = [
    { id: 1, name: 'Active Step', isCompleted: false },
    { id: 2, name: 'Incompleted Step', isCompleted: false },
    { id: 3, name: 'Completed Step', isCompleted: true },
]

const mockState: AppState = {
    appData: {
        formConfig: {
            steps,
            activeStep: 0,
        },
    },
}

describe('AppReducer', () => {
    it('SET_FORM_ACTIVE_STEP', () => {
        const action: AppAction = {
            type: 'SET_FORM_ACTIVE_STEP',
            payload: { activeStep: 1 },
        }
        const expected: AppState = {
            appData: {
                formConfig: {
                    steps,
                    activeStep: 1,
                },
            },
        }
        expect(appReducer(mockState, action)).toEqual(expected)
    })

    it('COMPLETE_FORM_ACTIVE_STEP', () => {
        const action: AppAction = {
            type: 'COMPLETE_FORM_ACTIVE_STEP',
            payload: { activeStep: 1 },
        }
        const expected: AppState = {
            appData: {
                formConfig: {
                    steps: steps.map((step) =>
                        step.id === 1 ? { ...step, isCompleted: true } : step
                    ),
                    activeStep: 2,
                },
            },
        }
        expect(appReducer(mockState, action)).toEqual(expected)
    })

    it('COMPLETE_FORM_ALL_STEPS', () => {
        const action: AppAction = {
            type: 'COMPLETE_FORM_ALL_STEPS',
            payload: { activeStep: 1 },
        }
        const expected: AppState = {
            appData: {
                formConfig: {
                    steps: steps.map((step) => ({
                        ...step,
                        isCompleted: true,
                    })),
                    activeStep: 2,
                },
            },
        }
        expect(appReducer(mockState, action)).toEqual(expected)
    })
})
