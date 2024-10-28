import "./LanguagesBody.css"
import LanguageMenu from "./languages-menu/LanguagesMenu"
import LangHome from "./languages-content/LangHome"
import CSS from "./languages-content/CSS"
import HTML from "./languages-content/HTML"
import Java from "./languages-content/Java"
import JavaScript from "./languages-content/JavaScript"
import Kotlin from "./languages-content/Kotlin"
import Python from "./languages-content/Python"
import PostgreSQL from "./languages-content/PostgreSQL"
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