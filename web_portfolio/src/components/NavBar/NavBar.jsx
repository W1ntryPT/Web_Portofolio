import './navbar.css';

function Navbar(){

    return(
        <nav>
            <h4 className='nav-brand'>Diogo Ferreira</h4>
            <div className="nav-options">
                <a className='nav-link big-body'>Home</a>
                <a className='nav-link big-body'>Projects</a>
                <a className='nav-link big-body'>Skills</a>
                <a className='nav-link big-body'>About</a>
                <div className='nav-language'>
                    <p className='nav-language-option b'>PT</p>
                    <p className='nav-language-option b'>EN</p>
                </div>
            </div>

        </nav>
    );
} 

export default Navbar;