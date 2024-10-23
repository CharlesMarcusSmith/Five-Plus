import PostgreSQL from "./LanguagesContent/PostgreSQL"
import LanguageMenu from "./LanguagesMenu/LanguagesMenu"
import "./LanguagesBody.css"

export default function LanguagesBody() {
    return (
        <>
            <div className="grid">
                <LanguageMenu/>
                <PostgreSQL/>
            </div>
        </>
    )
}