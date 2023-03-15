import { useState } from "react";
import Main from "./components/billSplit/Main";
import Modal from "./components/billSplit/Modal";
import Navbar from "./components/Navbar";
// import TipCalculator from "./components/billSplit/Tip";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BillSplit from "./pages/billSplitCalculator/BillSplit";
import BmiCalculator from "./pages/bmi/BmiCalculator";

const App = () => {
  
  return (
    <div className="bg-slate-900 h-screen text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bill-calculator" element={<BillSplit />} />
        <Route path="/bmi-calculator" element={<BmiCalculator />} />
      </Routes> 
    </div>
  );
}

export default App;
