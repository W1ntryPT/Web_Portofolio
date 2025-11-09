import { use, useEffect, useState, useContext } from "react";
import "./hero.css"
import { LanguageContext } from "../../../contexts";

function Hero(){
    const[title, setTitle] = useState("Diogo Ferreira");
    const { texts, setTexts } = useContext(LanguageContext);

    const txt = texts.txts.hero;

    useEffect(()=>{
        setTimeout (()=>{
            setTitle(title === txt.titles[0] ? txt.titles[1] : txt.titles[0]);
        }, 5000)
    });

    return(
        <section id="hero">
            <p className="hxl title ">{title}</p>
            <p className="big-body" style={{ whiteSpace: 'pre-line' }}>{txt.text}</p>

            <div style={{zIndex: -1}}><p>dsadas</p></div>
        </section>
    );
}

export default Hero;