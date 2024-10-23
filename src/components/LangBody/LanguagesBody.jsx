import "./LanguagesBody.css"
import LanguageMenu from '../LangMenu/LanguageMenu'
import React, {useState} from 'react';
import { TbStar } from "react-icons/tb";
import { TbStarFilled } from "react-icons/tb";

export default function LanguagesBody() {
    const[click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    return (
        <>
            <div className="grid">
                <LanguageMenu/>
                <div className="container">
                    <div className="lang_body">
                        <span className="lang_stars">
                            <TbStarFilled/><TbStarFilled/><TbStar/><TbStar/><TbStar/>
                        </span>
                        <div className="lang_text">
                            <h2>PostgreSQL</h2>
                            <h4 className="stars_wording">Advanced Beginner</h4>
                            <p className="text_heading">Covered</p>
                            <p>Have completed a number of projects involving SQL, covering:</p>
                            <ul>
                                <li className="covered_bullet"><span>SELECT</span></li>
                                <li className="covered_bullet"><span>INSERT</span></li>
                                <li className="covered_bullet"><span>CREATE TABLE</span></li>
                                <li className="covered_bullet"><span>JOIN</span></li>
                                <li className="covered_bullet"><span>CREATE EXTERNAL TABLE</span></li>
                                <li className="covered_bullet"><span>SHOW TABLES</span></li>
                                <li className="covered_bullet"><span>DROP IF EXISTS</span></li>
                                <li className="covered_bullet"><span>LOAD DATA LOCAL INPATH</span></li>
                            </ul>
                        </div>
                    </div>
                </div>    
            </div>    
        </>
    )
}