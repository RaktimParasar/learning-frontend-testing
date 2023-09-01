import { screen, render, act } from '@testing-library/react'
import user from '@testing-library/user-event'
import { Counter } from './Counter'

describe('counter', () => {
  test('renders correctly', () => {
    render(<Counter />)
    const headingElement = screen.getByRole('heading')
    expect(headingElement).toBeInTheDocument()

    const counterButton = screen.getByRole('button', { name: 'Increment' })
    expect(counterButton).toBeInTheDocument()
  })

  test('renders a count of 0', () => {
    render(<Counter />)
    const countElement = screen.getByRole('heading')
    expect(countElement).toHaveTextContent('0')
  })

  test('renders a count of 1 after clicking the increment button', async () => {
    user.setup()
    render(<Counter />)
    const incrementButton = screen.getByRole('button', {
      name: 'Increment',
    })
    const countElement = screen.getByRole('heading')
    for (let i = 1; i < 3; i++) {
      await act(async () => await user.click(incrementButton))
      expect(countElement).toHaveTextContent(i.toString())
    }
  })

  test('renders a count of 10 after clicking the set button', async () => {
    user.setup()
    render(<Counter />)
    const amountInput = screen.getByRole('spinbutton')
    // sets the amount
    await act(async () => await user.type(amountInput, '10'))
    expect(amountInput).toHaveValue(10)
    const setButton = screen.getByRole('button', {
      name: 'Set',
    })
    await act(async () => await user.click(setButton))
    // checks the amount
    const countElement = screen.getByRole('heading')
    expect(countElement).toHaveTextContent('10')
  })

  test('focus on tab', async () => {
    user.setup()
    render(<Counter />)
    const incrementBtn = screen.getByRole('button', { name: 'Increment' })
    const amountInput = screen.getByRole('spinbutton')
    const setButton = screen.getByRole('button', { name: 'Set' })
    await act(async () => await user.tab())
    expect(incrementBtn).toHaveFocus()
    await act(async () => await user.tab())
    expect(amountInput).toHaveFocus()
    await act(async () => await user.tab())
    expect(setButton).toHaveFocus()
  })
})

/**
 *  ------ Pointer Interactions ------
 *
 * Convenience APIs - internally calls pointer APIs
 * click()
 * dblClick()
 * tripleClick()
 * hover()
 * unhover()
 * tab()
 *
 * Pointer APIs
 * pointer({keys: "[MouseLeft]"})
 * pointer({keys: "[MouseLeft][Mouseright]"})
 * pointer("[MouseLeft][Mouseright]")
 * pointer("[MouseLeft>]")
 * pointer("[/MouseLeft]")
 *
 * Utility APIs
 * clear()
 * selectOptions()
 * deselectOptions()
 * upload()
 *
 * Clipboard APIs
 * copy()
 * cut()
 * paste()
 *
 * Keyboard APIs
 * keyboard("foo") - translates to: f,o,o
 * keyboard ("{Shift>}A{/Shift}") - translates to: Shift(down), A, Shift(up)
 */
