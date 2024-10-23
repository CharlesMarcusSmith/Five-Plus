import LanguagesContent from "./LanguagesContent/LanguagesContent"
import LanguageMenu from "./LanguagesMenu/LanguagesMenu"
import "./LanguagesBody.css"

export default function LanguagesBody() {
    return (
        <>
            <div className="grid">
                <LanguageMenu/>
                <LanguagesContent/>
            </div>
        </>
    )
}