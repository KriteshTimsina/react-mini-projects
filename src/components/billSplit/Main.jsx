import React, { useState } from 'react'
// import ErrorToast from '../ErrorToast';
import Modal from './Modal';
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Main = ({showModal,setShowModal}) => {
    const[peoples,setPeoples] = useState();
    const[totalAmount,setTotalAmount] = useState();
    const[includeTip,setIncludeTip] = useState(false);
    const[tipAmount,setTipAmount] = useState(0);
    // const[closeModal,setCloseModal]= useState(false);
    const [amountPerPerson,setAmountPerPerson] = useState(null);

    const handleTip = () =>{
        setIncludeTip((prevValue) => !prevValue);
        setShowModal(false);
    }
    const generateBill = () =>{
        if(!peoples || !totalAmount){
             toast.error('Input fields cannot be empty', { autoClose: 4000 });
             setShowModal(false);
        }
        else {
            if(tipAmount){
            setAmountPerPerson((parseFloat(totalAmount) + parseInt(tipAmount) ) / parseFloat(peoples) ); 
            }
            else{
                setAmountPerPerson(parseFloat(totalAmount) / parseFloat(peoples));
            }
            setShowModal(true);
        }
    }
  return (
    <div className='flex justify-center items-center flex-col mt-20 '>
        <div>
            <input
                className='my-4 pr-24 py-2 bg-inherit text-stone-300 indent-4 rounded-md border-sky-500 border-2'
                type="text" 
                placeholder='Number of People'
                // value={peoples}
                onChange={e =>setPeoples(e.target.value)}
                />
        </div>
        <div>
            <input
                className='my-4 pr-24 py-2 bg-inherit text-stone-300 indent-4 rounded-md border-sky-500 border-2 '  
                type="text" 
                placeholder='Total Amount'
                // value={totalAmount}
                onChange={e =>setTotalAmount(e.target.value)} />
        </div>
        <div className='  space-x-2 my-1 -ml-40'>
            <input
                onClick={handleTip}
                type="checkbox" 
                // checked={includeTip}
                defaultChecked={includeTip}
              />
            <label>include tip?</label>
        </div>
        <div>
        {
        includeTip ?
        <div>
            <input 
                className='my-4 pr-24 py-2 bg-inherit text-stone-300 indent-4 rounded-md border-sky-500 border-2 '
                type="text" 
                placeholder='Tip Amount'
                // value={tipAmount}
                onChange={e =>setTipAmount(e.target.value)} />
        </div>
        : ""

        }
        </div>
        <div>
            <button onClick={generateBill} className='bg-cyan-600 p-2 my-5 rounded-md'>Split Share</button>
            
        </div>
        {/* <div className=' absolute h-4/5 top-32'>
        {
            showModal ?
              <Modal closeModal={closeModal} setCloseModal={setCloseModal} /> 
              : ""
        }
        </div> */}
        {
            showModal ? <Modal setShowModal={setShowModal} amountPerPerson ={amountPerPerson} peoples={peoples} totalAmount={totalAmount} tipAmount={tipAmount} /> : ""
        }
        <div>
        <ToastContainer />
        
            
        </div>
    </div>
  )
}

export default Main