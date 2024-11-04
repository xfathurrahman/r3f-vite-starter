import { type FC, type RefObject, useEffect, useMemo, useRef } from 'react'

import { createPortal, useFrame } from '@react-three/fiber'
import {
  type DataTexture,
  HalfFloatType,
  NearestFilter,
  OrthographicCamera,
  Scene,
  type ShaderMaterial,
  Uniform,
  Vector2,
  WebGLRenderTarget,
} from 'three'

import type { RenderTargetArray } from '@/types/three.types'

import fragmentShader from '@/assets/shaders/sim/fragment.glsl'
import vertexShader from '@/assets/shaders/sim/vertex.glsl'

type GpgpuProps = {
  renderMatRef: RefObject<ShaderMaterial>
  resolution: number
  initDataTexture: DataTexture
}

export const Gpgpu: FC<GpgpuProps> = ({
  renderMatRef,
  resolution,
  initDataTexture,
}) => {
  const simMatRef = useRef<ShaderMaterial>(null)
  const currentRenderTargetIndexRef = useRef(0)
  const scene = useMemo(() => new Scene(), [])
  const camera = useMemo(() => new OrthographicCamera(-1, 1, 1, -1, -1, 1), [])

  const renderTargets: RenderTargetArray = useMemo(
    () => [
      new WebGLRenderTarget(resolution, resolution, {
        magFilter: NearestFilter,
        minFilter: NearestFilter,
        type: HalfFloatType,
      }),
      new WebGLRenderTarget(resolution, resolution, {
        magFilter: NearestFilter,
        minFilter: NearestFilter,
        type: HalfFloatType,
      }),
    ],
    [resolution]
  )

  useFrame(({ gl, pointer, viewport }) => {
    const simMat = simMatRef.current
    const renderMat = renderMatRef.current
    const currentRenderTargetIndex = currentRenderTargetIndexRef.current

    if (!simMat || !renderMat) return

    const { width, height } = viewport.getCurrentViewport()

    simMat.uniforms.uPointer.value.x = (pointer.x * width) / 2
    simMat.uniforms.uPointer.value.y = (pointer.y * height) / 2

    gl.setRenderTarget(renderTargets[currentRenderTargetIndex])
    gl.render(scene, camera)
    gl.setRenderTarget(null)

    renderMat.uniforms.uPositions.value =
      renderTargets[currentRenderTargetIndex].texture
    simMat.uniforms.uCurrentPositions.value =
      renderTargets[currentRenderTargetIndex].texture

    currentRenderTargetIndexRef.current = 1 - currentRenderTargetIndex
  })

  useEffect(() => {
    return () => {
      renderTargets.forEach((rt) => rt.dispose())
    }
  }, [renderTargets])

  return (
    <>
      {createPortal(
        <mesh>
          <planeGeometry args={[2, 2]} />
          <shaderMaterial
            ref={simMatRef}
            name='simMat'
            vertexShader={vertexShader}
            fragmentShader={fragmentShader}
            uniforms={{
              uCurrentPositions: new Uniform(initDataTexture),
              uInitPositions: new Uniform(initDataTexture),
              uPointer: new Uniform(new Vector2(99, 99)),
            }}
          />
        </mesh>,
        scene
      )}
    </>
  )
}
