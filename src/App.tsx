import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex h-screen w-full flex-col items-center justify-center'>
      <div className='absolute bottom-20 mb-2 rounded-lg bg-green-500 p-10 text-white'>
        <h1 className='text-4xl'>{count}</h1>
      </div>
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
