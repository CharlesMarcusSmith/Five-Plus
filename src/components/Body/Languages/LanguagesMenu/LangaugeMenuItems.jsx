import './LanguagesMenu.css'
import { SiCss3 } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { RiJavaFill } from "react-icons/ri";
import { SiJavascript } from "react-icons/si";
import { SiKotlin } from "react-icons/si";
import { SiPython } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";

export default function LanguageItems(click){
    const languages = [
        {title: 'CSS',        id:1, itemClassName: "si_items", imageClassName: "si_logo", imageName: <SiCss3/>},
        {title: 'HTML',       id:2, itemClassName: "si_items", imageClassName: "si_logo", imageName: <SiHtml5/>},
        {title: 'Java',       id:3, itemClassName: "ri_items", imageClassName: "ri_logo", imageName: <RiJavaFill/>},
        {title: 'JavaScript', id:4, itemClassName: "si_items", imageClassName: "si_logo", imageName: <SiJavascript/>},
        {title: 'Kotlin',     id:5, itemClassName: "si_items", imageClassName: "si_logo", imageName: <SiKotlin/>},
        {title: 'Python',     id:6, itemClassName: "si_items", imageClassName: "si_logo", imageName: <SiPython/>},
        {title: 'PostgreSQL', id:7, itemClassName: "si_items", imageClassName: "si_logo", imageName: <SiPostgresql/>}
    ]

    const languageItems = languages.map(language =>
        <li className={language.itemClassName}><span className={language.imageClassName}>{language.imageName}</span>{language.title} </li>
    )

    console.log("Click in items:" + Object.values(click))

    return(
        <ul className={click ? "lang_list_active" : "lang_list"}>
            {languageItems}
        </ul>
    )
}