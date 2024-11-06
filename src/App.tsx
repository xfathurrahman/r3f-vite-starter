import { useState } from 'react'

import { Canvas } from '@react-three/fiber'

import Box from './components/Box'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex h-screen w-full flex-col items-center justify-center'>
      <div className='absolute bottom-20 mb-2 rounded-lg bg-green-500 p-10 text-white'>
        <h1 className='text-4xl'>{count}</h1>
      </div>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} />
      </Canvas>
      <div className='absolute bottom-10 flex items-center justify-center space-x-2'>
        {['Decrease', 'Increase'].map((action) => (
          <div
            key={action}
            className='rounded-lg bg-neutral-800 p-2'
          >
            <button
              className='text-white'
              onClick={() =>
                setCount((count) =>
                  action === 'Decrease' ? count - 1 : count + 1
                )
              }
              disabled={
                (action === 'Decrease' && count <= 0) ||
                (action === 'Increase' && count >= 10)
              }
            >
              {action}
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
