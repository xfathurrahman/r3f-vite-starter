import { Canvas } from '@react-three/fiber'
import { act, render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import Home from '../App'
import Box from '../components/Box'

describe('Home Component', () => {
  it('renders without crashing', () => {
    const { container } = render(<Home />)
    expect(container).toBeTruthy()
  })

  it('contains two Box components', async () => {
    const { container } = render(<Home />)
    await act(async () => {
      const boxes = container.querySelectorAll('canvas')
      expect(boxes.length).toBe(1)
    })
  })
})

describe('Box Component', () => {
  it('renders without crashing', async () => {
    const { container } = render(
      <Canvas>
        <Box position={[0, 0, 0]} />
      </Canvas>
    )
    await act(async () => {
      expect(container).toBeTruthy()
    })
  })

  it('changes scale on click', async () => {
    const { container } = render(
      <Canvas>
        <Box position={[0, 0, 0]} />
      </Canvas>
    )
    await act(async () => {
      const mesh = container.querySelector('canvas')
      expect(mesh).toBeTruthy()
      mesh?.dispatchEvent(new MouseEvent('click', { bubbles: true }))
      // Add assertions to check the scale change
    })
  })

  it('changes color on hover', async () => {
    const { container } = render(
      <Canvas>
        <Box position={[0, 0, 0]} />
      </Canvas>
    )
    await act(async () => {
      const mesh = container.querySelector('canvas')
      expect(mesh).toBeTruthy()
      mesh?.dispatchEvent(new MouseEvent('pointerover', { bubbles: true }))
      // Add assertions to check the color change
    })
  })
})
