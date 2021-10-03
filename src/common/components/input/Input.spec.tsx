import { screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import { customRender } from '../../../test-utils'
import { colors } from '../../theme'
import { Input } from './Input'


describe('<Input />', () => {
    it('renders on the page with its label and without error message', () => {
        customRender(<Input type="text" label="Test input" name="testInput"/>)
        expect(screen.getByRole('textbox', {name: 'Test input'})).toBeInTheDocument()
        expect(screen.queryByText('This field is required')).not.toBeInTheDocument()
    })

    it('renders on the page with required mark and display an error message', () => {
        customRender(<Input type="text" label="Test input" name="testInput" error="This field is required" rules={{required: {value: true, message: 'This field is required'}}}/>)
        const inputLabel = screen.getByText('Test input')
        expect(inputLabel).toHaveStyleRule('content', "'*'", {modifier: ':after'})
        expect(inputLabel).toHaveStyleRule('color', colors.status.error, { modifier: ':after' })
        expect(screen.getByText('This field is required')).toBeInTheDocument()
    })
    
    describe('Accessibility', () => {
        it('should not have any violations', async () => {
          const { container } =  customRender(<Input type="text" label="Test input" name="testInput"/>)
          const results = await axe(container)
          expect(results).toHaveNoViolations()
        })
    })   
})