import React from 'react'

const Header = ({title}) => {
  return (
    <div className='h-20 py-5'>
    <h1 className='text-center text-3xl font-mono'>
      <span className='text-cyan-400'>{"<"}</span>
      <span className='text-teal-400'>{"<"}</span>
       &nbsp;{title}  &nbsp;
      <span className='text-teal-400'>{">"}</span>
      <span className='text-cyan-400'>{">"}</span>
      </h1>
  </div>
  )
}

export default Header