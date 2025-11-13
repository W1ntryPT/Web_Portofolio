import { useRef,useEffect, useState, useContext } from "react";
import { LanguageContext } from "../../../contexts";
import Typed from 'typed.js';
import "./hero.css"

function Hero(){
    const[title, setTitle] = useState("Diogo Ferreira");
    const { texts, setTexts } = useContext(LanguageContext);

    const txt = texts.txts.hero;

    const el = useRef(null);
    useEffect(() => {
    const typed = new Typed(el.current, {
      strings: txt.titles,
      typeSpeed: 50,
      backSpeed: 40,
      backDelay: 1500,
      contentType: "html",
      loop: true,
      loopCount: Infinity,
    });
    return () => { typed.destroy(); };
  }, []);

    return(
        <section id="hero">
            <p className="hxl title " ref={el}></p>
            <p className="big-body" style={{ whiteSpace: 'pre-line' }}>{txt.text}</p>

            <div className="background-object"><p>dsadasdasbdsagdsagdgsasda</p></div>
        </section>
    );
}

export default Hero;