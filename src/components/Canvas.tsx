import { Box, OrbitControls } from '@react-three/drei'
import { Canvas as ThreeCanvas } from '@react-three/fiber'

const Canvas = () => {
  return (
    <ThreeCanvas className='h-full w-full'>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box position={[0, 0, 0]}>
        <meshStandardMaterial
          attach='material'
          color='hotpink'
        />
      </Box>
      <OrbitControls />
    </ThreeCanvas>
  )
}

export default Canvas
