import { Dispatch } from 'react'
import { AppData, FluxStandardAction, FormConfig } from '../types'

export type ContextValue = [AppState, Dispatch<AppAction>] | undefined

export interface AppState {
    appData: AppData
}

export interface AppStateReturn extends AppState {
    appDispatch: Dispatch<AppAction>
}

export type AppAction = SetConfig

export interface SetConfig extends FluxStandardAction {
    type: 'SET_FORM_CONFIG'
    payload: {
        formConfig: FormConfig
    }
}
