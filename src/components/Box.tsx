import { useRef, useState } from 'react'

import { useFrame } from '@react-three/fiber'
import { Mesh } from 'three'

function Box(props: JSX.IntrinsicElements['mesh']) {
  const mesh = useRef<Mesh>(null)
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  useFrame((_, delta) => {
    if (mesh.current) {
      mesh.current.rotation.x += delta
    }
  })
  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 1.5 : 1}
      onClick={() => setActive(!active)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <boxGeometry
        attach='geometry'
        args={[1, 1, 1]}
      />
      <meshStandardMaterial
        attach='material'
        color={hovered ? 'hotpink' : 'orange'}
      />
    </mesh>
  )
}

export default Box
