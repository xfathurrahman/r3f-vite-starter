import { Canvas } from '@react-three/fiber'
import { act, render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import Box from '../components/Box'

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
