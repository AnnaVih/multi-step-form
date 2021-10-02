export interface FluxStandardAction {
    type: string
    payload?: unknown
    error?: boolean
    meta?: unknown
}

export interface Step {
    id: number
    name: string
    isCompleted: boolean
}
export interface FormConfig {
    steps: Step[]
    activeStep: number
}

export interface AppData {
    formConfig: FormConfig
}
