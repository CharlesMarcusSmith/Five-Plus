export function GetStarWording({ noOfStars }) {
    // Searching wording using index.
    const wording = ["Beginner", "Advanced Beginner", "Intermediate", "Advanced", "Expert"];
    return wording[noOfStars - 1];
}