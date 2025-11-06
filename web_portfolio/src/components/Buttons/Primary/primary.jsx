import './primary.css';

function PrimaryButton({text = "Button", disabled = false, action = () => {console.log("no action defined")}}){

    return(
        <button className='btn-primary' onClick={action}>
            <p><b>
                {text}
            </b></p>
        </button>
    );
} 

export default PrimaryButton;