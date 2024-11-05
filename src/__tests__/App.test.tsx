import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, test } from 'vitest'

import App from '../App'

describe('App component', () => {
  test('renders correctly', () => {
    render(<App />)
    expect(screen.getByText('0')).toBeInTheDocument()
    expect(screen.getByText('Decrease')).toBeInTheDocument()
    expect(screen.getByText('Increase')).toBeInTheDocument()
  })

  test('Increase button increments the count', () => {
    render(<App />)
    const increaseButton = screen.getByText('Increase')
    fireEvent.click(increaseButton)
    expect(screen.getByText('1')).toBeInTheDocument()
  })

  test('Decrease button decrements the count', () => {
    render(<App />)
    const increaseButton = screen.getByText('Increase')
    const decreaseButton = screen.getByText('Decrease')
    fireEvent.click(increaseButton) // Increment to 1 first
    fireEvent.click(decreaseButton)
    expect(screen.getByText('0')).toBeInTheDocument()
  })

  test('Decrease button is disabled at count 0', () => {
    render(<App />)
    const decreaseButton = screen.getByText('Decrease')
    expect(decreaseButton).toBeDisabled()
  })

  test('Increase button is disabled at count 10', () => {
    render(<App />)
    const increaseButton = screen.getByText('Increase')
    for (let i = 0; i < 10; i++) {
      fireEvent.click(increaseButton)
    }
    expect(increaseButton).toBeDisabled()
  })
})
