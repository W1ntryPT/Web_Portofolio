import { use, useEffect, useState } from "react";
import "./hero.css"

function Hero(){
    const[title, setTitle] = useState("Diogo Ferreira");

    const text = "Hi there 👋 I’m Diogo, a software/web developer.\nHere you’ll find some of my projects and a bit about my journey in software development.";

    useEffect(()=>{
        setTimeout (()=>{
            setTitle(title === "Diogo Ferreira" ? "Web Portfolio" : "Diogo Ferreira")
        }, 5000)
    });

    return(
        <section id="hero">
            <p className="hxl title">{title}</p>
            <p className="big-body" style={{ whiteSpace: 'pre-line' }}>{text}</p>
        </section>
    );
}

export default Hero;