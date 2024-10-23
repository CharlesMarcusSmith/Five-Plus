import "./LanguagesContent.css"
import { GetLangStarCount } from "../Languages";
import { Stars } from "./Stars/Stars";
import { GetStarWording } from "./Stars/Stars"; 
export default function LanguagesContent() {
    // Function call (rather than component call <component/>)
    const noOfStars = GetLangStarCount({ target: "CSS" });
    const starWording = GetStarWording({noOfStars: noOfStars});
    return (
        <>
            <div className="lang_content">
                <Stars noOfStars={noOfStars}/>
                <div className="lang_text">
                    <h2>CSS</h2>
                    <h4 className="stars_wording">{starWording}</h4>
                    <p className="text_heading">Covered</p>
                    <p>This current project displays my current CSS ability, I have however mastered Flexbox and Grid positioning.</p>
                </div>
            </div>
        </>
    )
}