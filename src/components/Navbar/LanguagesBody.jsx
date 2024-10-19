import "./LanguagesBody.css"
import { TbStar } from "react-icons/tb";
import { TbStarFilled } from "react-icons/tb";
export default function LanguagesBody() {
    return (
        <>
            <div className="container">
                <ul className="lang_list">
                    <h2 className="lang_heading">Languages</h2>
                    <li className="lang_items">Java</li>
                    <li className="lang_items">Kotlin</li>
                    <li className="lang_items">Python</li>
                    <li className="lang_items">SQL</li>
                </ul>
                <div className="lang_body">
                    <span className="lang_stars">
                        <TbStarFilled/><TbStarFilled/><TbStar/><TbStar/><TbStar/>
                    </span>
                    <div className="lang_text">
                        <h2>SQL</h2>
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
        </>
    )
}