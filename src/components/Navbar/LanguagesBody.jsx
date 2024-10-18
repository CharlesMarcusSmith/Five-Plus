import "./LanguagesBody.css"
export default function LanguagesBody() {
    return (
        <>
            <div className="container">
                <ul className="lang_list">
                    <h2>Languages</h2>
                    <li className="lang_items">Java</li>
                    <li className="lang_items">Kotlin</li>
                    <li className="lang_items">Python</li>
                    <li className="lang_items">SQL</li>
                </ul>
                <div className="lang_body">
                    <p className="lang_text">
                        <p>Have completed a number of projects involving SQL, covering:</p>
                        <p>SELECT</p>
                        <p>INSERT</p>
                        <p>CREATE TABLE</p>
                        <p>JOIN</p>
                        <p>CREATE EXTERNAL TABLE</p>
                        <p>SHOW TABLES</p>
                        <p>DROP IF EXISTS</p>
                        <p>LOAD DATA LOCAL INPATH</p>
                    </p>
                </div>
            </div>        
        </>
    )
}