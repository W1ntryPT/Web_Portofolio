import './slide.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import  { PrimaryButton } from './../../../Buttons';
import Carousel from 'react-bootstrap/Carousel';


const Slide = ({project, language, btn}) => {

    const action = () => {
        // abrir link
    }

    return(
        <div className="slider-item">

            <Carousel data-bs-theme="dark" slide={true} id="slider-images" indicators={false} >
                {project.images.map((i, index) =>
                <Carousel.Item key={index + "p"}>
                    <div className="image-slide" style={{ backgroundImage:`url(${i})`}}></div>
                </Carousel.Item>
                )}
            </Carousel>

            <div className="slide-content">
                <div className="content-body">
                    <div className="title"><h5>{project.text[language].title}</h5></div>
                    <div className="description">
                        <h6>Description:</h6>
                        <p>{project.text[language].description}</p>
                    </div>
                    <div className="languages">
                        <h6>Languages:</h6>
                        <p>
                            {project.technologies.map(l =>
                                <span>{l}</span>
                            )}
                        </p>
                    </div>
                </div>
                <div className="options">
                    <PrimaryButton text={btn} />
                </div>
            </div>

        </div>
    );

}

export default Slide;