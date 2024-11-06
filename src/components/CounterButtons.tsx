interface CounterButtonsProps {
  count: number
  setCount: React.Dispatch<React.SetStateAction<number>>
}

function CounterButtons({ count, setCount }: CounterButtonsProps) {
  return (
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
  )
}

export default CounterButtons
