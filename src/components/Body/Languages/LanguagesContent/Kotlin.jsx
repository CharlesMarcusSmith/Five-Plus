import "./LanguagesContent.css"
import { GetLangStarCount } from "../Languages";
import { Stars } from "./Stars/Stars";
import { GetStarWording } from "./Stars/Stars"; 
export default function LanguagesContent() {
    // Function call (rather than component call <component/>)
    const noOfStars = GetLangStarCount({ target: "Kotlin" });
    const starWording = GetStarWording({noOfStars: noOfStars});
    return (
        <>
            <div className="lang_content">
                <Stars noOfStars={noOfStars}/>
                <div className="lang_text">
                    <h2>Kotlin</h2>
                    <h4 className="stars_wording">{starWording}</h4>
                    <p className="text_heading">Covered</p>
                    <p>This has been a primary language in my team. It does not come naturally but I have enough understanding to be classed higher than a beginner.</p>
                </div>
            </div>
        </>
    )
}