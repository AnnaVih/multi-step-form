import { Dispatch, useMemo, createContext, useContext, ReactNode } from 'react'
import { AppAction, AppState, AppStateReturn, ContextValue } from './types'

export const AppContext = createContext<ContextValue>(undefined)

interface AppStateProviderProps {
    appState: AppState
    appDispatch: Dispatch<AppAction>
    children: ReactNode
}

export const AppStateProvider = ({
    appState,
    appDispatch,
    children,
}: AppStateProviderProps): JSX.Element => {
    const value: [AppState, Dispatch<AppAction>] = useMemo(
        () => [appState, appDispatch],
        [appState, appDispatch]
    )
    return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export const useAppState = (): AppStateReturn => {
    const appContext = useContext(AppContext)
    if (!appContext) {
        throw new Error(`useAppState must be used within a AppStateProvider`)
    }

    const [appState, appDispatch] = appContext

    const { appData } = appState

    return {
        appData,
        appDispatch,
    }
}
