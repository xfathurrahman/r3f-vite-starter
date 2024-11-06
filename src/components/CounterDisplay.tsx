interface CounterDisplayProps {
  count: number
}

function CounterDisplay({ count }: CounterDisplayProps) {
  return (
    <div className='absolute bottom-20 mb-2 rounded-lg bg-green-500 p-10 text-white'>
      <h1 className='text-4xl'>{count}</h1>
    </div>
  )
}

export default CounterDisplay
