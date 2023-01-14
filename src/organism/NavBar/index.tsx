import  { useState } from "react";
import "./NavBar.scss";
import { FaAlignJustify } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import {clsx} from 'clsx'
import Phone from "../../attom/Vectors/Phone";
import Locations from "../../attom/Vectors/Location";

const NavBar = () => {
  const tabs = [
    "stay",
    "dine",
    "refresh",
    "explore",
    "offers",
    "experiences",
    "reserve",
  ];
  const [isMobileTabOpen, setIsMobileTabOpen] = useState(false)
  const handleMobileTabSwitch = ()=>{
    setIsMobileTabOpen((prev)=> !prev)
  }
  console.log(isMobileTabOpen)
  return (
    <div className="NavBar">
      <div className="nav-wrapper">
        <a href="#" className="logo">
          MARRAM
        </a>

        <div className="tabs">
          {tabs.map((tab, index) => (
            <a key={index} className="tab">
              {tab}
            </a>
          ))}
        </div>
        <FaAlignJustify className="menu" onClick={handleMobileTabSwitch} />
<div className= { `mobile ${isMobileTabOpen ? 'right-0':'-right-[150%]'}`}>
         <div className="flex flex-col items-center">
         <div className="w-full flex justify-between">
          <p className="text-white">MARRAM</p>
         <FaTimes className="cancel" onClick={()=>setIsMobileTabOpen(false)}/>
         </div>
            <div className="h-screen flex flex-col gap-y-6 items-center mt-5">
            {tabs.map((tab, index) => (
              <a key={index} className="tabb" onClick={handleMobileTabSwitch}>
                {tab}
              </a>
            ))}
            <div className="flex flex-col text-center">
              <i>Connect with us</i>
              <i>hello @ marrammontauk . com</i>
            </div>
            <div className="flex">
            <Phone/>
            <Locations/>
            </div>
            </div>
         </div>
          </div>
</div>
      {/* <div className=""></div> */}
    </div>
  );
};

export default NavBar;
