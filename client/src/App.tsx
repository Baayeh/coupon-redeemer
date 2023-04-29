import { Link } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <>
      <h1 className='text-3xl font-bold'>GQ Coding Exercise: <span className='text-red-400'>Incentive Redeemer</span></h1>
      <div className="links mt-8 flex justify-center gap-x-5">
        <Link to='/setup' className='bg-[#646cff] border border-[#646cff] p-3 rounded-full text-white hover:bg-[#242424] transition-all duration-300 ease-in-out'>Admin - Setup</Link>
        <Link to='/redeem' className='bg-[#646cff] border border-[#646cff] p-3 rounded-full text-white hover:bg-[#242424] transition-all duration-300 ease-in-out'>Redeem code</Link>
      </div>
    </>
  )
}

export default App
