import React from 'react'
import { Link } from 'react-router-dom'
const AdvertisemenPage = () => {
  
  return (
    <div className='flex flex-col justify-center items-center my-20'>
      <div className='h-20 py-5'>
      <h1 className='text-center text-3xl font-mono'>
        <span className='text-cyan-400'>{"<"}</span>
        <span className='text-teal-400'>{"<"}</span>
         &nbsp;Split-bill  &nbsp;
        <span className='text-teal-400'>{">"}</span>
        <span className='text-cyan-400'>{">"}</span>
        </h1>
    </div>
      <Link to="/" className='absolute top-10 right-10 bg-cyan-500 px-2 py-1'>
       {"<"} Go Back 
      </Link>
      <div className='mb-4 hover:bg-black hover:opacity-70'>
        <img className='rounded-md ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9PVRGUR8_lIrmRwNukVkAeu5z84DRs5PosGjEC59Dw06AaVDbzCXo01QQ9OZtzt35tf8&usqp=CAU" alt="people-at-resturant" />
      </div>
      <div className='text-center w-60'>
      "Say goodbye to bill-splitting confusion with our easy-to-use app"
      </div>
      <Link to="/bill-splitter" className='my-4 bg-cyan-600 px-7 py-2 rounded shadow-md hover:shadow-white transition-shadow ease-linear '>
        Try it for free 
      </Link>
    </div>
  )
}

export default AdvertisemenPage