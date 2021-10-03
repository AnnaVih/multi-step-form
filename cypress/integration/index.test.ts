/// <reference types="cypress"/>

describe('Multi Step Form functionality', () => {
    it('should prevent user from submitting a form if inputs are incomplete or miss matched otherwise it completing it and see the Success Message', () => {
        cy.visit('http://localhost:3000/')
        cy.findByRole('button', { name: 'Submit' }).click()
        cy.findAllByText('This is a required field').should('exist')
        cy.findByRole('checkbox', {
            name: 'Receive updates abour our product by email',
        }).should('not.exist')
        cy.findByRole('textbox', { name: 'Email' }).type('test')
        cy.findByRole('button', { name: 'Submit' }).click()
        cy.findByText('Enter a valid e-mail address').should('exist')
        cy.findByRole('textbox', { name: 'Email' }).type('test@co.uk')
        cy.findByRole('button', { name: 'Submit' }).click()
        cy.findByText('Enter a valid e-mail address').should('not.exist')
        cy.findByRole('textbox', { name: 'Name' }).type('Test Name')
        cy.findByRole('button', { name: 'Submit' }).click()
        cy.findByText('Password').type('1234')
        cy.findByRole('button', { name: 'Submit' }).click()
        cy.findByText(
            'Password must contain at least 9 characters, one uppercase, one lowercase, one number'
        ).should('exist')
        cy.findByText('Password').type('123456789A')
        cy.findByRole('button', { name: 'Submit' }).click()
        cy.findByText(
            'Password must contain at least 9 characters, one uppercase, one lowercase, one number'
        ).should('exist')
        cy.findByText('Password').type('123456789Aa')
        cy.findByRole('button', { name: 'Submit' }).click()
        cy.findByRole('checkbox', {
            name: 'Receive updates abour our product by email',
        }).should('exist')
        cy.findByRole('checkbox', {
            name: 'Receive updates abour our product by email',
        }).click()
        cy.findByRole('checkbox', {
            name: 'Receive communication by email for other products created by our team',
        }).click()
        cy.findByRole('button', { name: 'Submit' }).click()
        cy.findByText(
            /Check out console log to see a submited data and then lets play a table tennis/
        ).should('exist')
    })
})
