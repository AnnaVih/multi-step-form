import { screen, waitFor } from '@testing-library/react'
import { axe } from 'jest-axe'
import { customRender } from '../../../test-utils'
import { MultiStepForm } from './MultiStepForm'
import { mocked } from 'ts-jest/utils'
import { useAppState } from '../../multi-step-form-state'
import { colors } from '../../theme'
import userEvent from '@testing-library/user-event'

const steps = [
    { id: 0, name: 'User', isCompleted: false },
    { id: 1, name: 'Policy', isCompleted: false },
    { id: 2, name: 'Done', isCompleted: false },
]

const mockAppDispatch = jest.fn()

jest.mock('../../multi-step-form-state')

const mockUseAppState = mocked(useAppState)

describe('<MultiStepForm />', () => {
    beforeEach(() => jest.clearAllMocks())
    it('should render a default User form view', () => {
        mockUseAppState.mockImplementation(() => ({
            appData: {
                formConfig: {
                    steps,
                    activeStep: 0,
                },
            },
            appDispatch: mockAppDispatch,
        }))

        customRender(<MultiStepForm />)
        expect(
            screen.getByRole('textbox', { name: 'Name' })
        ).toBeInTheDocument()
        const activeStep = screen.getByRole('button', { name: 'User' })
        expect(activeStep).toHaveStyleRule(
            'background-color',
            colors.status.active
        )
    })

    it('should render Policy form view', () => {
        mockUseAppState.mockImplementation(() => ({
            appData: {
                formConfig: {
                    steps,
                    activeStep: 1,
                },
            },
            appDispatch: mockAppDispatch,
        }))

        customRender(<MultiStepForm />)
        expect(
            screen.getByRole('checkbox', {
                name: 'Receive updates abour our product by email',
            })
        ).toBeInTheDocument()
        const activeStep = screen.getByRole('button', { name: 'Policy' })
        expect(activeStep).toHaveStyleRule(
            'background-color',
            colors.status.active
        )
    })

    it('should render Done form view', () => {
        mockUseAppState.mockImplementation(() => ({
            appData: {
                formConfig: {
                    steps,
                    activeStep: 2,
                },
            },
            appDispatch: mockAppDispatch,
        }))

        customRender(<MultiStepForm />)
        expect(
            screen.getByText(
                /Check out console log to see a submited data and then lets play a table tennis/
            )
        ).toBeInTheDocument()
        const activeStep = screen.getByRole('button', { name: 'Done' })
        expect(activeStep).toHaveStyleRule(
            'background-color',
            colors.status.active
        )
    })

    it('should complete all required fields and on submit User form view should dispatch correct action creator', async () => {
        const mockAppDispatchSpy = jest.fn()
        mockUseAppState.mockImplementation(() => ({
            appData: {
                formConfig: {
                    steps,
                    activeStep: 0,
                },
            },
            appDispatch: mockAppDispatchSpy,
        }))
        customRender(<MultiStepForm />)
        userEvent.type(
            screen.getByRole('textbox', { name: 'Name' }),
            'Test Name'
        )
        userEvent.type(
            screen.getByRole('textbox', { name: 'Email' }),
            'test@co.uk'
        )
        userEvent.type(screen.getByText('Password'), '12345678Ae')
        userEvent.click(screen.getByRole('button', { name: 'Submit' }))
        await waitFor(() => expect(mockAppDispatchSpy).toHaveBeenCalledTimes(1))
        expect(mockAppDispatchSpy).toHaveBeenCalledWith({
            payload: { activeStep: 0 },
            type: 'COMPLETE_FORM_ACTIVE_STEP',
        })
    })

    describe('Accessibility', () => {
        it('should not have any violations', async () => {
            mockUseAppState.mockImplementation(() => ({
                appData: {
                    formConfig: {
                        steps,
                        activeStep: 0,
                    },
                },
                appDispatch: mockAppDispatch,
            }))
            const { container } = customRender(<MultiStepForm />)
            const results = await axe(container)
            expect(results).toHaveNoViolations()
        })
    })
})
