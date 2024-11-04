import logo from '@/assets/react.svg'

function App() {
  return (
    <div className='flex h-screen w-full flex-col items-center justify-center bg-neutral-800'>
      <h1 className='text-3xl font-bold text-white'>Hello world!</h1>
      <img
        src={logo}
        className='my-5 h-12 w-12'
        alt='logo'
      />
    </div>
  )
}
export default App
