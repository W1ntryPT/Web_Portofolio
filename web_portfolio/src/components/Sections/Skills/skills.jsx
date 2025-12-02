import { useContext, useEffect, useState, useRef, useMemo } from "react";
import { LanguageContext,PageContext } from "../../../contexts";
import techs from './../../../assets/data/tecnologies.json';
import useIsVisible from "../../../utils/useIsVisible";
import getSkills from "./../../../utils/getSkillsList"
import "./skills.css"

function About(){
    const { texts } = useContext(LanguageContext);
    const txt = texts.txts.skills;
    const ts = useMemo(() => getSkills(techs.techs), []);

    const TYPE_COLORS = techs.typecolors;

    const {setCurrent} = useContext(PageContext);
    const ref = useRef();
    const isVisible = useIsVisible(ref);

    useEffect(() => {
        if(isVisible)
            setCurrent("skills")
    }, [isVisible]);

    
    return(
        <section id="skills" ref={ref}>
            <h2 className="title">
                {txt.title}
            </h2>

            <div className="cards">
                {ts.map((t, index) => (
                    <div className="tech-container" key={index} style={{gridArea: `${t.x} / ${t.y} / ${t.x + 1} / ${t.y + 1}`, justifyContent: t.align}}>
                        <a className="tech" style={{cursor: t.link ? "pointer": "default",  "--bg":  TYPE_COLORS[t.type]}} href={t.link} target="_blank">
                            <img src={`/imgs/tecnologies/${t.img}.jpg`} alt={t.title} link />
                            <div className="content">
                                <p>{t.name}</p>
                            </div>
                        </a>
                    </div>
                ))}
            </div>

            <div className="background-object"><img src="blob2.svg" alt="blob" /></div>

        </section>
    );
}

export default About;
