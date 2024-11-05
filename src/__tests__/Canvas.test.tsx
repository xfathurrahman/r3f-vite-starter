import { render } from '@testing-library/react'
import { describe, expect, test } from 'vitest'

import Canvas from '../components/Canvas'

describe('Canvas component', () => {
  test('renders Canvas component without crashing', () => {
    const { container } = render(<Canvas />)
    expect(container).toBeInTheDocument()
  })

  test('contains ambient light', () => {
    const { getByRole } = render(<Canvas />)
    const ambientLight = getByRole('ambientLight')
    expect(ambientLight).toBeInTheDocument()
  })

  test('contains point light', () => {
    const { getByRole } = render(<Canvas />)
    const pointLight = getByRole('pointLight')
    expect(pointLight).toBeInTheDocument()
  })

  test('contains a box with hotpink color', () => {
    const { getByRole } = render(<Canvas />)
    const box = getByRole('box')
    expect(box).toHaveStyle('color: hotpink')
  })
})
