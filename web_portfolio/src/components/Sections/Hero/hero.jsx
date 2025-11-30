import { useRef,useEffect, useState, useContext } from "react";
import { LanguageContext } from "../../../contexts";
import Typed from 'typed.js';
import {blob} from '../../../assets/img/blob1.svg';
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
      cursorChar: ''
    });
    return () => { typed.destroy(); };
  }, []);

    return(
        <section id="hero">
            <div className="title">
              <p className="hxl" ref={el}></p>
            </div>
            <p className="big-body" style={{ whiteSpace: 'pre-line' }}>{txt.text}</p>

            <div className="background-object"><img src="/blob1.svg" alt="blob" /></div>
        </section>
    );
}

export default Hero;