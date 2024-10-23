import './LanguagesMenu.css'
import React, {useState} from 'react';
import { FiAlignJustify } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import { SiCss3 } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { RiJavaFill } from "react-icons/ri";
import { SiJavascript } from "react-icons/si";
import { SiKotlin } from "react-icons/si";
import { SiPython } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";

export default function LanguageMenu(langauage) {
    const[click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    return (
        <>
            <div className="lang_heading" onClick={handleClick}>
                <span ><h3 >Languages</h3><icon>{click ? <FiX/> : <FiAlignJustify/>}</icon></span>
            </div>
            <ul className={click ? "lang_list_active" : "lang_list"}>
                <li className="si_items"><span className="si_logo"><SiCss3 /></span>CSS</li>
                <li className="si_items"><span className="si_logo"><SiHtml5 /></span>HTML</li>
                <li className="ri_items"><span className="ri_logo"><RiJavaFill /></span>Java</li>
                <li className="si_items"><span className="si_logo"><SiJavascript /></span>JavaScript</li>
                <li className="si_items"><span className="si_logo"><SiKotlin /></span>Kotlin</li>
                <li className="si_items"><span className="si_logo"><SiPython /></span>Python</li>
                <li className="si_items"><span className="si_logo"><SiPostgresql /></span>PostgreSQL</li>
            </ul>
        </>
    )
}