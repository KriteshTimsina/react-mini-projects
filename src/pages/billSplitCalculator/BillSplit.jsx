import React,{useState} from 'react'
import Main from '../../components/billSplit/Main'
import Header from '../../components/Header';


const BillSplit = () => {
    const[showModal,setShowModal] = useState(false);
  return (
    <div>
       <Header title="Split/Bill" />
        <Main showModal={showModal} setShowModal={setShowModal} />
    </div>
  )
}

export default BillSplit