import React from 'react'

import { useNavigate ,Link} from 'react-router-dom';
const Home = () => {
  const navigate = useNavigate();
  
  return (
    <div className='flex flex-wrap justify-center  items-center gap-4 my-20'>
      <Link to={"/bill-calculator"}   className='cursor-pointer bg-cyan-700 h-14 w-20 text-center hover:text-slate-200 hover:bg-cyan-900 hover:font-medium hover:pt-1 transition-all'>
        Bill Splitter App
      </Link> 
      <Link to="/bmi-calculator" className='bg-violet-600 h-14 w-20 text-center'>
        BMI Calculator
      </Link>
      <div className='bg-cyan-700 h-14 w-20 text-center'>
        Lorem Ipsum
      </div>
      <div className='bg-cyan-700 h-14 w-20 text-center'>
        Bill Splitter App
      </div>
      <div className='bg-cyan-700 h-14 w-20 text-center'>
        Bill Splitter App
      </div>
      <div className='bg-cyan-700 h-14 w-20 text-center'>
        Bill Splitter App
      </div>
    </div>
  )
}

export default Home