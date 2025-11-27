import { useContext, useEffect, useState } from "react";
import { LanguageContext } from "../../../contexts";
import techs from './../../../assets/data/tecnologies.json';
import "./skills.css"

function About(){
    const { texts } = useContext(LanguageContext);
    const txt = texts.txts.skills;
    const [ts, setTs] = useState([]);

    const MAX_X = 5;
    const MAX_Y = 5;

    const shuffle = (arr) => {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    };

    useEffect(() => {
        const positions = [];
        for (let x = 1; x <= MAX_X; x++) {
            for (let y = 1; y <= MAX_Y; y++) {
                positions.push({ x, y });
            }
        }

        const shuffledPositions = shuffle(positions);

        const mapped = techs.map((t, i) => ({
            ...t,
            ...shuffledPositions[i]
        }));

        setTs(mapped);
    }, []);
    
    return(
        <section id="skills">
            <h2 className="title">
                {txt.title}
            </h2>

            <div className="cards">
                {ts.map((t, index) => (
                    <div className="tech-container" key={index} style={{gridArea: `${t.x} / ${t.y} / ${t.x + 1} / ${t.y + 1}`}}>
                        <div className="tech">
                            <img src={`/imgs/tecnologies/${t.img}`} alt={t.title} />
                            <div className="content">
                                {t.name}
                                {t.type}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default About;
