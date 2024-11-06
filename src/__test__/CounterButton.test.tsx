import { act, fireEvent, render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import App from '../App'

describe('App Component', () => {
  it('renders without crashing', () => {
    const { container } = render(<App />)
    expect(container).toBeTruthy()
  })

  it('contains two Box components', async () => {
    const { container } = render(<App />)
    await act(async () => {
      const boxes = container.querySelectorAll('canvas')
      expect(boxes.length).toBe(1)
    })
  })

  it('increases count when Increase button is clicked', async () => {
    const { getByText } = render(<App />)
    const increaseButton = getByText('Increase')
    const counterDisplay = getByText('0')

    await act(async () => {
      fireEvent.click(increaseButton)
    })

    expect(counterDisplay.textContent).toBe('1')
  })
})
