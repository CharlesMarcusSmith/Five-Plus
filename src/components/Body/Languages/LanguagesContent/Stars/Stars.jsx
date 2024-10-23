import { TbStar } from "react-icons/tb";
import { TbStarFilled } from "react-icons/tb";  
export function Stars({noOfStars}){
    // Create filled stars
    const stars = new Array(noOfStars).fill('').map((_, index) => <TbStarFilled key={index} />);

    // Add empty stars if needed
    for (let i = 0; i < 5 - noOfStars; i++) {
        stars.push(<TbStar key={`empty-${i}`} />);
    }

    return (<span className="lang_stars"> {stars}</span>)
}

export function GetStarWording({noOfStars}){
    // Searching wording using index.
    const wording = ["Beginner", "Advanced Beginner","Intermediate","Advanced","Expert"]
    return wording[noOfStars-1]
}