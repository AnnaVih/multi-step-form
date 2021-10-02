import { AppAction, AppState } from './types'
import { setFormConfig } from './actions'
import * as actionTypes from './action-types'

export const appReducer = (state: AppState, action: AppAction): AppState => {
    switch (action.type) {
        case actionTypes.SET_FORM_CONFIG: {
            return setFormConfig(state, action.payload)
        }
        default:
            throw new Error('Action type not recognised')
    }
}
