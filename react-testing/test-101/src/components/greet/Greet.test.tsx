import { render, screen } from '@testing-library/react'

import { Greet } from './Greet'

describe('Greet', () => {
  test('renders correctly', () => {
    render(<Greet />)
    const textElement = screen.getByText(/hello/i)
    expect(textElement).toBeInTheDocument()
  })
})

describe('Nested', () => {
  test('renders a name', () => {
    render(<Greet name="Raktim" />)
    const textPropElement = screen.getByText(/raktim/i)
    expect(textPropElement).toBeInTheDocument()
  })
})

// one test file can have nested describe and multiple describe methods

// .only - runs on particular test
// .skip - skips the test
