import React, { useReducer } from 'react'
import { Layout } from './common/components/layout'
import {
    appReducer,
    AppState,
    AppStateProvider,
} from './common/multi-step-form-state'
import { LinkThemeProvider } from './common/theme'
import { MultiStepForm } from './MultiStepForm'

const App = () => {
    const defaultState: AppState = {
        appData: {
            formConfig: {
                activeStep: 0,
            },
        },
    }

    const [appState, appDispatch] = useReducer<typeof appReducer>(
        appReducer,
        defaultState
    )

    return (
        <AppStateProvider appState={appState} appDispatch={appDispatch}>
            <LinkThemeProvider>
                <Layout>
                    <MultiStepForm />
                </Layout>
            </LinkThemeProvider>
        </AppStateProvider>
    )
}

export default App
