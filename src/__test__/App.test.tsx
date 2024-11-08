import { act, render } from '@testing-library/react'
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
})
