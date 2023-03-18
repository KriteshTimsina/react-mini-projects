import React from 'react'

import {Link} from 'react-router-dom';
const Home = () => {
  
 
  return (
    <div className='flex flex-wrap justify-center  items-center gap-4 my-20'>
      <Link to={"/bill-calculator"}   className='cursor-pointer bg-cyan-700  text-center hover:text-slate-200 hover:bg-cyan-900 hover:font-medium hover:pt-1 transition-all h-20 w-20 px-1 py-2'>
        Bill Split App
      </Link> 
      <Link to="/bmi-ca" className='cursor-pointer bg-purple-700  text-center hover:text-slate-200 hover:bg-purple-900 hover:font-medium hover:pt-1 transition-all h-20 w-20 px-1 py-2'>
        BMI Calculator
      </Link>
      <Link to="/random" className='cursor-pointer bg-blue-700  text-center hover:text-slate-200 hover:bg-blue-900 hover:font-medium hover:pt-1 transition-all h-20 w-20 px-1 py-2'>
        Random color generator
      </Link>
      
    </div>
  )
}

export default Home