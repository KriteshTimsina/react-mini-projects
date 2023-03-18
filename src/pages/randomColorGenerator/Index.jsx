import React from "react";
import { AiOutlineCopy } from "react-icons/ai";
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Index = () => {
  //initializing empty divElement array to loop 
  const divElement = [];

  //this function generates random hex color for-eg: #a0i990
  let generateRandomColor = () => {
    const chars = "0123456789abcdef";
    let colorCodeLength = 6;
    let colorCode = "#";
    for (let i = 0; i < colorCodeLength; i++) {
      const randomNumber = Math.floor(Math.random() * 16);
      colorCode += chars.substring(randomNumber, randomNumber + 1);
    }
    return colorCode;
  };
  //copy text on button click
  const handleCopyText = async(randomColor) =>{
    try{
          await navigator.clipboard.writeText(randomColor);
          toast(`Successfully copied "${randomColor}"`, { autoClose: 2000 });
        }catch(e){
          toast.error("Something went wrong!", { autoClose: 2000 });
        }
  }

  //this block loops for 30 times and generate 30 div element
  for (let i = 0; i <50; i++) {
    let randomColor = generateRandomColor()
    divElement.push(
      <div title="click to copy" onClick={()=>handleCopyText(randomColor)} key={i} style={{ backgroundColor: randomColor, boxShadow:"rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px" }} className="cursor-pointer relative p-5 drop-shadow-lg rounded-sm mx-1">
        {randomColor}
        <AiOutlineCopy onClick={()=>handleCopyText(randomColor)} className=" absolute top-1 right-1" />
      </div>
    );
  }
   let rand = generateRandomColor();
 
  return (
    <div className="my-5 flex flex-col items-center gap-5 bg-slate-900">
    <h1 className="text-4xl text-center my-5 font-bold" style={{color:rand}}>Random Color Generator</h1>
    <div className="flex  justify-center  items-center gap-5 flex-wrap">
      {divElement}
    </div>
    {/* reloads page on button click */}
    <button onClick={()=>setTimeout(()=>window.location.reload(),500)} style={{backgroundColor:rand}} className="p-2 rounded-sm bg-black ">Generate More</button>
    <ToastContainer />
    </div>
  );
};

export default Index;
