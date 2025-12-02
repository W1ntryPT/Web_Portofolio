import "./projects.css"
import { useContext,useState,useEffect, useRef } from "react";
import { LanguageContext, PageContext } from '../../../contexts';
import Slide from "./slide/slide";
import Carousel from 'react-bootstrap/Carousel';
import projects from './../../../assets/data/projects.json';
import useIsVisible from "../../../utils/useIsVisible";

function Projects(){
  const {texts} = useContext(LanguageContext);
  const {setCurrent} = useContext(PageContext);
  const txt = texts.txts.projects;

  const ref = useRef();
  const isVisible = useIsVisible(ref);

  useEffect(() => {
    if(isVisible)
      setCurrent("projects")
    console.log(isVisible)
  }, [isVisible]);


  return(
    <section id = "projects" ref={ref}>
      <h2>
        {txt.title}
      </h2>

      <Carousel data-bs-theme="dark" fade={true} >
        {projects.map((p, index) =>
          <Carousel.Item key={index + "p"}>
            <Slide project={p} language={texts.language} btn = {txt.btn} key={index + "p1"} />
          </Carousel.Item>
        )}
      </Carousel>

    </section>
  );
}

export default Projects;
