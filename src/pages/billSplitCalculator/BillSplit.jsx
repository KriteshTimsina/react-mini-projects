import React,{useState} from 'react'
import Main from '../../components/billSplit/Main'
import AdvertisemenPage from './AdvertisemenPage';

const BillSplit = () => {
    const[showModal,setShowModal] = useState(false);
  return (
    <div>
        <div className='h-20 py-5'>
      <h1 className='text-center text-3xl font-mono'>
        <span className='text-cyan-400'>{"<"}</span>
        <span className='text-teal-400'>{"<"}</span>
         &nbsp;Split-bill  &nbsp;
        <span className='text-teal-400'>{">"}</span>
        <span className='text-cyan-400'>{">"}</span>
        </h1>
    </div>
        <Main showModal={showModal} setShowModal={setShowModal} />
    </div>
  )
}

export default BillSplit