import React,{useEffect} from 'react'
import {AiOutlineCopy} from 'react-icons/ai';
const Index = () => {
  let divElement = [];
  let div = [];
 
  const generateRandomColor = ()=>{
  const chars = "0123456789abcdef";
  let colorCodeLength = 6;
  let colorCode = "" ;

  for (let i=0;i<colorCodeLength;i++){
    const randomNumber = Math.floor(Math.random()*16);
    colorCode+= chars.substring(randomNumber,randomNumber+1);
  }
  return colorCode 
}
const randomNumber = "#"+  generateRandomColor();
divElement.push(randomNumber);
async function handleCopyText(){
  try{
    await navigator.clipboard.writeText(randomNumber);
    alert("Done")
  }catch(e){
    console.log(e);
  }
}


// for(let i=0;i<2;i++){
//   div.push(<div className='p-5' style={{backgroundColor:randomNumber}}>{randomNumber}</div>);
// }

  return (
    <div className='flex flex-col justify-start items-center h-screen gap-5 flex-wrap my-7'>
    {
    divElement.map((i,index)=>{
        return(
          <div key={index} className='relative'>
          <div style={{backgroundColor:randomNumber}} className="p-5 px-7">{randomNumber}</div>
          <button onClick={handleCopyText}><AiOutlineCopy className='absolute top-1 right-1 ' /></button>
          </div>
        )
      })
}
<button className="py-2 px-5 bg-red-400 rounded-md">GenerateRandomColor</button>

    </div>
  )
}

export default Index