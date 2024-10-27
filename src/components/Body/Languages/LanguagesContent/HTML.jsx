import "./LanguagesContent.css"
import { GetLangStarCount } from "../Languages";
import { Stars } from "./Stars/Stars";
import { GetStarWording } from "./Stars/Stars"; 
export default function LanguagesContent() {
    // Function call (rather than component call <component/>)
    const noOfStars = GetLangStarCount({ target: "HTML" });
    const starWording = GetStarWording({noOfStars: noOfStars});
    return (
        <>
            <p className="lang_content">
                <Stars noOfStars={noOfStars}/>
                <h2>HTML</h2>
                <h4 className="stars_wording">{starWording}</h4>
                <h3 className="text_heading">Covered</h3>
                <p>This current project displays my current HTML ability. It has certainly improved but accessibility has been raised as a concern.</p>
            </p>
        </>
    )
}