import { screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import { customRender } from '../../../test-utils'
import { colors } from '../../theme'
import { ErrorMessage } from './ErrorMessage'


describe('<ErrorMessage />', () => {
    it('renders on the page with error message', () => {
        customRender(<ErrorMessage error="Some test error"/>)
        const errorMessage = screen.getByText('Some test error')
        expect(errorMessage).toBeInTheDocument()
        expect(errorMessage).toHaveStyle(`color: ${colors.status.error}`)
       
    })
    describe('Accessibility', () => {
        it('should not have any violations', async () => {
          const { container } =  customRender(<ErrorMessage error="Some test error"/>)
          const results = await axe(container)
          expect(results).toHaveNoViolations()
        })
    })   
})