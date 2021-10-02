import { FormConfig } from '../types'
import { AppState } from './types'

export const setFormConfig = (
    state: AppState,
    payload: { formConfig: FormConfig }
): AppState => ({
    appData: {
        ...state.appData,
        formConfig: payload.formConfig,
    },
})
