import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { axe } from 'jest-axe'
import { customRender } from '../../../test-utils'
import { Checkbox } from './Checkbox'

describe('<Checkbox />', () => {
    it('renders on the page with its label', () => {
        customRender(<Checkbox label="Test label" type="checkbox" name="test"/>)
        const checkBox = screen.getByRole('checkbox', {name: 'Test label'})
        expect(checkBox).toBeInTheDocument()
        expect(checkBox).not.toBeChecked()
        userEvent.click(checkBox)
        expect(checkBox).toBeChecked()
    })
    describe('Accessibility', () => {
        it('should not have any violations', async () => {
          const { container } = customRender(<Checkbox label="Test label" type="checkbox" name="test"/>)
          const results = await axe(container)
          expect(results).toHaveNoViolations()
        })
    })   
})