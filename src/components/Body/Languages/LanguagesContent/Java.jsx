import "./LanguagesContent.css"
import { GetLangStarCount } from "../Languages";
import { Stars } from "./Stars/Stars";
import { GetStarWording } from "./Stars/Stars"; 
export default function LanguagesContent() {
    // Function call (rather than component call <component/>)
    const noOfStars = GetLangStarCount({ target: "Java" });
    const starWording = GetStarWording({noOfStars: noOfStars});
    return (
        <>
            <div className="lang_content">
                <Stars noOfStars={noOfStars}/>
                <div className="lang_text">
                    <h2>Java</h2>
                    <h4 className="stars_wording">{starWording}</h4>
                    <p className="text_heading">Covered</p>
                    <p>My native coding Language. Extensive training conducted in Java, and I have a good understanding of OOP.</p>
                </div>
            </div>
        </>
    )
}