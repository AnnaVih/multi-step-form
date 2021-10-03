import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { axe } from 'jest-axe'
import { customRender } from '../../../test-utils'
import { colors } from '../../theme'
import { Stepper } from './Stepper'

const steps = [{id: 1, name: 'Active Step', isCompleted: false },{id: 2, name: 'Incompleted Step', isCompleted: false }, {id: 3, name: 'Completed Step', isCompleted: true }]
describe('<Stepper />', () => {
    it('renders on the page all steps and have correct styles appropriate for active step', () => {
        customRender(<Stepper onStepClick={jest.fn()} steps={steps} activeStep={1}/>)
        steps.forEach(step => expect(screen.getByRole('button', {name: step.name})).toBeInTheDocument())
        const activeStep = screen.getByRole('button', {name: 'Active Step'})
        expect(activeStep).toHaveStyleRule('background-color', colors.status.active)
    })

    it('renders on the page with correct styles for incompleted and completed steps', () => {
        customRender(<Stepper onStepClick={jest.fn()} steps={steps} activeStep={1}/>)
        const incompletedStep = screen.getByRole('button', {name: 'Incompleted Step'})
        const completedStep = screen.getByRole('button', {name: 'Completed Step'})
        expect(incompletedStep).toHaveStyleRule('background-color', colors.status.disabled)
        expect(incompletedStep).toBeDisabled()
        expect(completedStep).toHaveStyleRule('background-color', colors.neutral.white)
        expect(completedStep).not.toBeDisabled()
    })

    it('should fire onClick handler while clicking on completed step', () => {
        const onStepClickSpy = jest.fn()
        customRender(<Stepper onStepClick={onStepClickSpy} steps={steps} activeStep={1}/>)
        const incompletedStep = screen.getByRole('button', {name: 'Completed Step'})
        userEvent.click(incompletedStep)
        expect(onStepClickSpy).toHaveBeenCalledTimes(1)
    })

    describe('Accessibility', () => {
        it('should not have any violations', async () => {
          const { container } =  customRender(<Stepper onStepClick={jest.fn()} steps={steps} activeStep={1}/>)
          const results = await axe(container)
          expect(results).toHaveNoViolations()
        })
    })   
})