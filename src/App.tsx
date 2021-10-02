import { useReducer } from 'react'
import { Layout } from './common/components/layout'
import { MultiStepForm } from './common/components/multi-step-form'
import {
    appReducer,
    AppState,
    AppStateProvider,
} from './common/multi-step-form-state'
import { LinkThemeProvider } from './common/theme'

const App = (): JSX.Element => {
    const defaultState: AppState = {
        appData: {
            formConfig: {
                activeStep: 0,
                steps: [
                    { id: 0, name: 'User', isCompleted: false },
                    { id: 1, name: 'Privacy', isCompleted: false },
                    { id: 2, name: 'Done', isCompleted: false },
                ],
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
