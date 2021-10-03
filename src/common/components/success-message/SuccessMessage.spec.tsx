import { screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import { customRender } from '../../../test-utils'
import { colors } from '../../theme'
import { SuccessMessage } from './SuccessMessage'


describe('<SuccessMessage />', () => {
    it('renders on the page with success message', () => {
        customRender(<SuccessMessage>Test success message</SuccessMessage>)
        const successMessage = screen.getByText('Test success message')
        expect(successMessage).toBeInTheDocument()
        expect(successMessage).toHaveStyle(`color: ${colors.status.success}`)
       
    })
    describe('Accessibility', () => {
        it('should not have any violations', async () => {
          const { container } =  customRender(<SuccessMessage>Test success message</SuccessMessage>)
          const results = await axe(container)
          expect(results).toHaveNoViolations()
        })
    })   
})