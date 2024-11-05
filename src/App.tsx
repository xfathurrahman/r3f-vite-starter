import { Box, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { useRegisterSW } from 'virtual:pwa-register/react'

function App() {
  useRegisterSW({
    onRegistered(r) {
      console.log('Service worker registered:', r)
    },
    onRegisterError(error) {
      console.error('Service worker registration error:', error)
    },
  })

  return (
    <div className='flex h-screen w-full flex-col items-center justify-center'>
      <h1 className='text-white'>Hello</h1>
      <Canvas className='h-full w-full'>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box position={[0, 0, 0]}>
          <meshStandardMaterial
            attach='material'
            color='hotpink'
          />
        </Box>
        <OrbitControls />
      </Canvas>
    </div>
  )
}

export default App
