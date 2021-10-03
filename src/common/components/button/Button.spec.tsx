import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { axe } from 'jest-axe'
import { customRender } from '../../../test-utils'
import { Button } from './Button'

describe('<Button/>', () => {
    it('renders on the page with its children', () => {
        customRender(<Button>Test button</Button>)
        expect(screen.getByRole('button', {name: 'Test button'})).toBeInTheDocument()
    })

    it('should fire onClick handler', () => {
        const onClickSpy = jest.fn()
        customRender(<Button onClick={onClickSpy}>Test button</Button>)
        userEvent.click(screen.getByRole('button', {name: 'Test button'}))
        expect(onClickSpy).toHaveBeenCalledTimes(1)
    })
    describe('Accessibility', () => {
        it('should not have any violations', async () => {
          const { container } = customRender(<Button>Test button</Button>)
          const results = await axe(container)
          expect(results).toHaveNoViolations()
        })
    })   
})