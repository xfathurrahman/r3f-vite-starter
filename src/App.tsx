import { useState } from 'react'

import { Canvas } from '@react-three/fiber'

import Box from './components/Box'
import CounterButtons from './components/CounterButtons'
import CounterDisplay from './components/CounterDisplay'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex h-screen w-full flex-col items-center justify-center'>
      <CounterDisplay count={count} />
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} />
      </Canvas>
      <CounterButtons
        count={count}
        setCount={setCount}
      />
    </div>
  )
}

export default App
