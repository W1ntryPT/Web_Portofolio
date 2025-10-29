import './primary.css';

function PrimaryButton({text = "Button"}){

    return(
        <button className='btn-primary'>
            <p><b>
                {text}
            </b></p>
        </button>
    );
} 

export default PrimaryButton;