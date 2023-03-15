import React from 'react'
import {ImCross} from 'react-icons/im';
const Modal = ({peoples,totalAmount,amountPerPerson,tipAmount,setShowModal}) => {
  return (
    <>
    
        <div  className=' relative h-4/5 bg-slate-800 w-96 mx-auto flex flex-col items-center py-5 rounded-sm shadow-lg shadow-slate-700'>
        <button onClick={()=>setShowModal(false)} className='absolute right-6 top-3 text-gray-400 hover:text-red-700 transition-colors text-sm font-semibold'>
            <ImCross />
        </button>
        <div>
            <p>No. of People : {peoples}</p>
            <p>Total Amount : {totalAmount}</p>
            <p>Tip Amount : {tipAmount}</p>
            <p>Bill per person : {amountPerPerson}</p>
        </div>
    </div>
    
    
    </>
  )
}

export default Modal