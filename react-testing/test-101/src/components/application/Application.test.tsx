import { render, screen } from '@testing-library/react'
import { Application } from './Application'

describe('Application', () => {
  test('renders correctly', () => {
    render(<Application />)
    const pageHeading = screen.getByRole('heading', {
      level: 1,
    })
    expect(pageHeading).toBeInTheDocument()

    const sectionHeading = screen.getByRole('heading', {
      level: 2,
    })
    expect(sectionHeading).toBeInTheDocument()

    const paragraphText = screen.getByText('All fields are mandatory')
    expect(paragraphText).toBeInTheDocument()

    const pText2 = screen.getByText('all fields', { exact: false })
    expect(pText2).toBeInTheDocument()

    const pText3 = screen.getByText('All fields are MANDATORY', {
      exact: false,
    })
    expect(pText3).toBeInTheDocument()

    const pText4 = screen.getByText(/All fields are mandatory/)
    expect(pText4).toBeInTheDocument()

    const pText5 = screen.getByText(/MANDATORY/i)
    expect(pText5).toBeInTheDocument()

    const pText6 = screen.getByText(/^all fields are MANDATORY$/i)
    expect(pText6).toBeInTheDocument()

    const pText7 = screen.getByText((content) => content.endsWith('mandatory'))
    expect(pText7).toBeInTheDocument()

    const pText8 = screen.getByText((content) => content.startsWith('All'))
    expect(pText8).toBeInTheDocument()

    const imageAltElement = screen.getByAltText('a random pixel')
    expect(imageAltElement).toBeInTheDocument()

    const titleElement = screen.getByTitle('close')
    expect(titleElement).toBeInTheDocument()

    const testIdElement = screen.getByTestId('custom html element')
    expect(testIdElement).toBeInTheDocument()

    const nameElement = screen.getByRole('textbox', {
      name: 'Name',
    })
    expect(nameElement).toBeInTheDocument()

    const nameElement2 = screen.getByLabelText('Name', {
      selector: 'input',
    })
    expect(nameElement2).toBeInTheDocument()

    const nameElement3 = screen.getByPlaceholderText('fullname')
    expect(nameElement3).toBeInTheDocument()

    const nameElement4 = screen.getByDisplayValue('Raktim')
    expect(nameElement4).toBeInTheDocument()

    const bioElement = screen.getByRole('textbox', {
      name: 'Bio',
    })
    expect(bioElement).toBeInTheDocument()

    const jobLocationElement = screen.getByRole('combobox')
    expect(jobLocationElement).toBeInTheDocument()

    const termsElement = screen.getByRole('checkbox')
    expect(termsElement).toBeInTheDocument()

    const submitButtonElement = screen.getByRole('button')
    expect(submitButtonElement).toBeInTheDocument()
    expect(submitButtonElement).toBeDisabled()

    const termsAndCondition = screen.getByLabelText(
      'I agree to the terms and conditions',
    )
    expect(termsAndCondition).toBeInTheDocument()
  })
})
