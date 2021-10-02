import { AppAction, AppState } from './types'
import {
    completeFormActiveStep,
    completeFormAllSteps,
    setFormActiveStep,
} from './actions'
import * as actionTypes from './action-types'

export const appReducer = (state: AppState, action: AppAction): AppState => {
    switch (action.type) {
        case actionTypes.COMPLETE_FORM_ACTIVE_STEP: {
            return completeFormActiveStep(state, action.payload)
        }
        case actionTypes.SET_FORM_ACTIVE_STEP: {
            return setFormActiveStep(state, action.payload)
        }

        case actionTypes.COMPLETE_FORM_ALL_STEPS: {
            return completeFormAllSteps(state, action.payload)
        }

        default:
            throw new Error('Action type not recognised')
    }
}
