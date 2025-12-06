import { useContext,useRef,useEffect } from "react";
import { LanguageContext,PageContext } from "../../../contexts";
import useIsVisible from "../../../utils/useIsVisible";
import "./about.css";

function About(){
    const { texts, setTexts } = useContext(LanguageContext);
    const txt = texts.txts.about;

    const {setCurrent} = useContext(PageContext);
      const ref = useRef();
      const isVisible = useIsVisible(ref);
    
      useEffect(() => {
        if(isVisible)
          setCurrent("about")
      }, [isVisible]);
    return(
        <section id="about" ref={ref}>
            <h2 className="title">
                {txt.title}
            </h2>
            <ul className="content">
                <li className="aboutItem">
                    <h5>{txt.intro}</h5>
                    <p className="aboutText">{txt.introText}</p>
                </li>
                <li className="aboutItem">
                    <h5>{txt.formation}</h5>
                    <p className="aboutText">{txt.formationText}</p>
                </li>
                <li className="aboutItem">
                    <h5>{txt.more}</h5>
                    <p className="aboutText">{txt.moreText}</p>
                </li>
            </ul>

        <div className="contact-section">
            <div className="contact-icon">
                <a
                    href={`mailto:${txt.email}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Send me an email"
                >
                    <img src={`${process.env.PUBLIC_URL}/web_portfolio/public/imgs/contacts/${txt.images.email}`} alt={txt.email} link />
                </a>
                <a
                href={`https://${txt.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
                >
                    <img src={`${process.env.PUBLIC_URL}./public/imgs/contacts/${txt.images.linkedin}`} alt={txt.images.linkedin} link />
                </a>
                <a
                href={`${txt.github}`}
                target="_blank"
                rel="noopener noreferrer"
                title="Github"
                >
                    <img src={`/imgs/contacts/${txt.images.github}`} alt={txt.images.github} link />
                </a>
            </div>
            <div className="contact-text">
                <b>
                    {txt.contact}
                </b>
            </div>
        </div>
        </section>
    );
}

export default About;