import './slide.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import  { PrimaryButton } from './../../../Buttons';


const Slide = ({imgs = [], title = "", decription = "", languages = [], btnText = "", link = ""}) => {

    const title = text.title;

    const action = () => {
        // abrir link
    }

    return(
        <div className="slider-item">

            <div className="slider-images">
                {imgs.map(i => {
                    <div className="img-slide" style={{ backgroundImage:`url(imgs/${i})`}}></div>
                })}
            </div>

            <div className="slide-content">
                <div className="content-body">
                    <div className="title"><h5>{title}</h5></div>
                    <div className="description">
                        <h6>Description:</h6>
                        <p>{decription}</p>
                    </div>
                    <div className="languages">
                        <h6>Languages:</h6>
                        {languages.map(l => {
                            <p>{l}</p>
                        })}
                    </div>
                </div>
                <div className="options">
                    <PrimaryButton text={btnText} />
                </div>
            </div>

        </div>
    );

}

export default Slide;