import "./LanguagesContent.css"
import { GetLangStarCount } from "../Languages";
import { Stars } from "./Stars/Stars";
import { GetStarWording } from "./Stars/Stars"; 
export default function LanguagesContent() {
    // Function call (rather than component call <component/>)
    const noOfStars = GetLangStarCount({ target: "PostgreSQL" });
    const starWording = GetStarWording({noOfStars: noOfStars});
    return (
        <>
            <div className="lang_content">
                <Stars noOfStars={noOfStars}/>
                <div className="lang_text">
                    <h2>PostgreSQL</h2>
                    <h4 className="stars_wording">{starWording}</h4>
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