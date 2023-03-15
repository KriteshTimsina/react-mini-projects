import React from 'react'
import {AiOutlineHome,AiFillHome} from "react-icons/ai";
import {Link} from 'react-router-dom';
const Navbar = () => {
  return (
    <Link to="/"><AiOutlineHome className="text-cyan-500 flex justify-center items-center w-full py-1 text-4xl" /></Link>
  )
}

export default Navbar