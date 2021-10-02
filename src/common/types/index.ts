export interface FluxStandardAction {
    type: string
    payload?: unknown
    error?: boolean
    meta?: unknown
}

export interface FormConfig {
    activeStep: number
}

export interface AppData {
    formConfig: FormConfig
}
