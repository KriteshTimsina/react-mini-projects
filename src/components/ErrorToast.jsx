import React from 'react'

const ErrorToast = ({errorMessage}) => {
  return (
    <div className=' absolute top-24 right-0 bg-cyan-500 w-52 h-16 rounded-md p-2'>
        {errorMessage} 
    </div>
  )
}

export default ErrorToast