import './LanguagesMenu.css'
import LanguageItems from '../Languages';
import React, {useState} from 'react';
import { FiAlignJustify } from "react-icons/fi";
import { FiX } from "react-icons/fi";

export default function LanguageMenu(langauage) {
    const[click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return (
        <>
            <div className="lang_heading" onClick={handleClick}>
                <span ><h3 >Languages</h3><icon>{click ? <FiX/> : <FiAlignJustify/>}</icon></span>
            </div>
            <LanguageItems click={click}/>
        </>
    )
}

// function switchLanguage() {
    
// }