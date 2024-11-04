import { type FC, memo, useRef } from 'react'

import { createDataTexture } from '@/functions'
import { OrbitControls } from '@react-three/drei'
import { Canvas as FiberCanvas } from '@react-three/fiber'
import { ShaderMaterial } from 'three'

import { Gpgpu, Particles } from './components'

const RESOLUTION = 512

export const Canvas: FC = () => {
  return (
    <div className='webgl-container'>
      <FiberCanvas>
        <CanvasContent />
      </FiberCanvas>
    </div>
  )
}

const CanvasContent = memo(() => {
  const renderMatRef = useRef<ShaderMaterial>(null)
  const initDataTexture = createDataTexture(RESOLUTION, 5)

  return (
    <>
      <OrbitControls makeDefault />
      <Particles
        ref={renderMatRef}
        resolution={RESOLUTION}
        initDataTexture={initDataTexture}
      />
      <Gpgpu
        resolution={RESOLUTION}
        renderMatRef={renderMatRef}
        initDataTexture={initDataTexture}
      />
    </>
  )
})

CanvasContent.displayName = 'CanvasContent'
