import React, {useState} from 'react';
import { FiAlignJustify } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import "./MainNavbar.css";
export default function MainNavbar() {
    // Create user icon click toggle functionality:
    const[click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
  return (
    <>
      {/* this empty div is called fragmentation, and it's a way of avoiding unessesary divs in our project. */}
      <header>
        <div className='header_bar'>
            <div className="logo"><h1> CS </h1></div>
            <div className="toggle" onClick={handleClick}>
                {/* Ternary operator for conditional for icon toggle*/}
                <span>{click ? <FiX/> : <FiAlignJustify/>}</span>
            </div>
            </div>
          <ul className={click ? "menu active" : "menu"}>
              {/* 
              multiple items created at once using following: 
              li*4.menu_items 
              */}
              <li className="menu_items">Languages</li>
              <li className="menu_items">Frameworks</li>
              <li className="menu_items">Skills</li>
              <li className="menu_items">Solutions</li>
          </ul>
        </header>
    </>
  )
}
