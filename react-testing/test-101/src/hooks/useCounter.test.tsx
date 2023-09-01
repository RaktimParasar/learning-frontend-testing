import { renderHook, act } from '@testing-library/react'

import { useCounter } from './useCounter'

describe('useCounter', () => {
  test('should render the initial count', () => {
    const { result } = renderHook(useCounter)
    // console.log("result", result);
    expect(result.current.count).toBe(0)
  })

  test('should accept and render the same as initial count', () => {
    const { result } = renderHook(useCounter, {
      initialProps: {
        initialCount: 20,
      },
    })
    expect(result.current.count).toBe(20)
  })

  test('increment', () => {
    const { result } = renderHook(useCounter)
    act(() => result.current.increment())
    expect(result.current.count).toBe(1)
  })

  test('decrement', () => {
    const { result } = renderHook(useCounter)
    act(() => result.current.decrement())
    expect(result.current.count).toBe(-1)
  })
})
