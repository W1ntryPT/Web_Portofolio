import { useContext } from "react";
import { LanguageContext } from "../../../contexts";
import "./about.css"

function About(){
    const { texts, setTexts } = useContext(LanguageContext);
    const txt = texts.txts.about;

    return(
        <section id="about">
            <h2 className="title">
                {txt.title}
            </h2>
        </section>
    );
}

export default About;