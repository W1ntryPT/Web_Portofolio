import "./projects.css"
import { useContext,useState,useEffect } from "react";
import { LanguageContext } from '../../../contexts';
import Slide from "./slide/slide";
import Carousel from 'react-bootstrap/Carousel';
import projects from './../../../assets/data/projects.json';


function Projects(){
  const {texts} = useContext(LanguageContext);
  const txt = texts.txts.projects;
  return(
    <section id = "projects">
      <h2>
        {txt.title}
      </h2>

      <Carousel data-bs-theme="dark" fade={true} >
        {projects.map((p, index) =>
          <Carousel.Item key={index + "p"}>
            <Slide project={p} language={texts.language} btn = {txt.btn} />
          </Carousel.Item>
        )}
      </Carousel>

    </section>
  );
}

export default Projects;



/*Bootstrap
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from 'components/ExampleCarouselImage';

function UncontrolledExample() {
return (
<Carousel>
<Carousel.Item>
<ExampleCarouselImage text="First slide" />
<Carousel.Caption>
<h3>First slide label</h3>
<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
</Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
<ExampleCarouselImage text="Second slide" />
<Carousel.Caption>
<h3>Second slide label</h3>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
</Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
<ExampleCarouselImage text="Third slide" />
<Carousel.Caption>
<h3>Third slide label</h3>
<p>
  Praesent commodo cursus magna, vel scelerisque nisl consectetur.
</p>
</Carousel.Caption>
</Carousel.Item>
</Carousel>
);
}

export default UncontrolledExample;
*/
