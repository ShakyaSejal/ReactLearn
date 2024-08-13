import React, { useState } from "react";
import { IoIosAddCircle } from "react-icons/io";
import { CiCircleMinus } from "react-icons/ci";
import { CiFaceSmile } from "react-icons/ci";
import { FaRegFaceSadCry } from "react-icons/fa6";
import { MdOutlineWrongLocation } from "react-icons/md";


const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [icon, setIcon] = useState();
  const [view, setView] =useState();

  const Plus = () => {
    setCounter(counter + 1);
    setIcon(<CiFaceSmile />);
    setView(true);
  };
  const Minus = () => {
    setCounter(counter - 1);
    setIcon(<FaRegFaceSadCry />);
  };
    const  off=()=>{
        setView(false)
    }
    return (
      <>
        <div className="flex justify-center mt-10">
          <IoIosAddCircle className="text-red-300" size={30} onClick={Plus} />
          {counter}
          {icon}
          <CiCircleMinus className="text-red-300" size={30} onClick={Minus} />
        </div>
        {view &&(
            <div className="flex justify-center "> 
           < div className=" fixed bg-green-600 p-6 rounded">iamhappy <MdOutlineWrongLocation onClick={off}/>
           </div>
        </div>
        )}
        
        
      </>
    );
  
};

export default Counter;
