import { render, RenderOptions, queries } from "@testing-library/react"
import { LinkThemeProvider } from "./common/theme"

const customRender = (ui: JSX.Element, options?: Partial<RenderOptions>) => {
    return render(ui, {
      wrapper: ({ children }) => {
        return <LinkThemeProvider>{children}</LinkThemeProvider>
    },
    queries,
    ...options,
  })
}

export * from '@testing-library/react'

export { customRender }
