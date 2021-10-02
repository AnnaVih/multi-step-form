import React from 'react'
import { ThemeProvider } from 'styled-components'

export const colors = {
    neutral: {
        light: '#f7f4f0',
    },
    status: {
        success: '#72C77D',
        error: '#D32F2F',
    },
}

const theme = {
    colors,
} as const

export type Theme = typeof theme

export const LinkThemeProvider: React.FC = ({ children }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
)
