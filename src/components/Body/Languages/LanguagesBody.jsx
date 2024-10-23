import "./LanguagesBody.css"
import LanguageMenu from "./LanguagesMenu/LanguagesMenu"
import LangHome from "./LanguagesContent/LangHome"
import CSS from "./LanguagesContent/CSS"
import HTML from "./LanguagesContent/HTML"
import Java from "./LanguagesContent/Java"
import JavaScript from "./LanguagesContent/JavaScript"
import Kotlin from "./LanguagesContent/Kotlin"
import Python from "./LanguagesContent/Python"
import PostgreSQL from "./LanguagesContent/PostgreSQL"
export default function LanguagesBody() {
    let Component
    switch (window.location.pathname){
        case "/":
            Component = LangHome
            break
        case "/css":
            Component = CSS
            break
        case "/html":
            Component = HTML
            break
        case "/java":
            Component = Java
            break
        case "/javascript":
            Component = JavaScript
            break
        case "/kotlin":
            Component = Kotlin
            break
        case "/python":
            Component = Python
            break
        case "/postgresql":
            Component = PostgreSQL
            break
        
    }

    
    return (
        <>
            <div className="grid">
                <LanguageMenu/>
                <Component/>
            </div>
        </>
    )
}