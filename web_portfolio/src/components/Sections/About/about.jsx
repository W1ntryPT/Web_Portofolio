import { useContext,useRef,useEffect } from "react";
import { LanguageContext,PageContext } from "../../../contexts";
import useIsVisible from "../../../utils/useIsVisible";
import "./about.css"

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
        </section>
    );
}

export default About;