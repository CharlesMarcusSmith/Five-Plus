import "./LanguagesContent.css"
import { LangStarCount } from "../Languages";
import { TbStar } from "react-icons/tb";
import { TbStarFilled } from "react-icons/tb";
const stars = <LangStarCount target={"PostgreSQL"}/>
export default function LanguagesContent() {
    return (
        <>
            <div className="lang_content">
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
        </>
    )
}