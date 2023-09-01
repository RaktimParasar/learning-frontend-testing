import { render, screen, act } from '@testing-library/react'
import user from '@testing-library/user-event'
import { CounterTwo } from './CounterTwo'

describe('Counter Two', () => {
  test('renders correctly', () => {
    render(<CounterTwo count={0} />)
    const headingElement = screen.getByRole('heading')
    expect(headingElement).toBeInTheDocument()
  })

  test('handlers are called', async () => {
    user.setup()
    // mock function using jest
    const incrementHandler = jest.fn()
    const decrementHandler = jest.fn()

    render(
      <CounterTwo
        count={0}
        handleIncrement={incrementHandler}
        handleDecrement={decrementHandler}
      />,
    )
    const incrementButton = screen.getByRole('button', { name: 'Increment' })
    const decrementButton = screen.getByRole('button', { name: 'Decrement' })

    await act(async () => await user.click(incrementButton))
    await act(async () => await user.click(incrementButton))
    await act(async () => await user.click(decrementButton))

    expect(incrementHandler).toHaveBeenCalledTimes(2)
    expect(decrementHandler).toHaveBeenCalledTimes(1)
  })
})
