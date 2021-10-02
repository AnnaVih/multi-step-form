import React from 'react'
import { ThemeProvider } from 'styled-components'

export const colors = {
    neutral: {
        lightGrey: '#f5f3f0',
        grey: '#d4d3d1',
        darkGrey: '#747371',
        white: '#fff',
        black: '#000'
    },

    status: {
        success: '#3ba649',
        error: '#D32F2F',
        active: '#2170b9',
        disabled: '#cccccc'
    },
}

const theme = {
    colors,
} as const

export type Theme = typeof theme

export const LinkThemeProvider: React.FC = ({ children }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
)
