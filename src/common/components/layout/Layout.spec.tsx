import { screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import { customRender } from '../../../test-utils'
import { Layout } from './Layout'


describe('<SuccessMessage />', () => {
    it('renders on the page with success message', () => {
        customRender(<Layout>Test layout children</Layout>)
        const successMessage = screen.getByText('Test layout children')
        expect(successMessage).toBeInTheDocument()
    }) 
})