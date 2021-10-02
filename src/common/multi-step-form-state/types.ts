import { Dispatch } from 'react'
import { AppData, FluxStandardAction } from '../types'

export type ContextValue = [AppState, Dispatch<AppAction>] | undefined

export interface AppState {
    appData: AppData
}

export interface AppStateReturn extends AppState {
    appDispatch: Dispatch<AppAction>
}

export type AppAction =
    | SetFormActiveStep
    | CompleteFormActiveStep
    | CompleteFormAllSteps

export interface CompleteFormActiveStep extends FluxStandardAction {
    type: 'COMPLETE_FORM_ACTIVE_STEP'
    payload: {
        activeStep: number
    }
}

export interface SetFormActiveStep extends FluxStandardAction {
    type: 'SET_FORM_ACTIVE_STEP'
    payload: {
        activeStep: number
    }
}

export interface CompleteFormAllSteps extends FluxStandardAction {
    type: 'COMPLETE_FORM_ALL_STEPS'
    payload: {
        activeStep: number
    }
}
