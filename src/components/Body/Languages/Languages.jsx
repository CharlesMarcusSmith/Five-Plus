import { SiCss3 } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { RiJavaFill } from "react-icons/ri";
import { SiJavascript } from "react-icons/si";
import { SiKotlin } from "react-icons/si";
import { SiPython } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
const languages = [
    {title: 'CSS',        id: 1, href: "/css", itemClassName: "si_items", imageClassName: "si_logo", imageName: <SiCss3/>, stars: 2},
    {title: 'HTML',       id: 2, href: "/html", itemClassName: "si_items", imageClassName: "si_logo", imageName: <SiHtml5/>, stars: 2},
    {title: 'Java',       id: 3, href: "/java", itemClassName: "ri_items", imageClassName: "ri_logo", imageName: <RiJavaFill/>, stars: 3},
    {title: 'JavaScript', id: 4, href: "/javascript", itemClassName: "si_items", imageClassName: "si_logo", imageName: <SiJavascript/>, stars: 1},
    {title: 'Kotlin',     id: 5, href: "/kotlin", itemClassName: "si_items", imageClassName: "si_logo", imageName: <SiKotlin/>, stars: 2},
    {title: 'Python',     id: 6, href: "/python", itemClassName: "si_items", imageClassName: "si_logo", imageName: <SiPython/>, stars: 2},
    {title: 'PostgreSQL', id: 7, href: "/postgresql", itemClassName: "si_items", imageClassName: "si_logo", imageName: <SiPostgresql/>, stars: 2}
]
export default function LanguageItems({click}){
    

    const languageItems = languages.map(language =>
        <li key={language.id} className={language.itemClassName}>
            <span className={language.imageClassName}>{language.imageName}</span>
            <a href={language.href}>{language.title}</a>
            </li>
    )

    return(
        <ul className={click ? "lang_list_active" : "lang_list"}>
            {languageItems}
        </ul>
    )
}

export function GetLangStarCount({target}){
    const result = languages.find(language => 
        language.title === target
    )
    return result ? result.stars : null;
}