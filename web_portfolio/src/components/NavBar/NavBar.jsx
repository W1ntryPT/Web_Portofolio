import { useContext, useEffect, useState } from 'react';
import { LanguageContext, LanguageProvider } from '../../contexts';
import './navbar.css';

function Navbar(){
    const { text } = useContext(LanguageContext);
    const[lang, setLang] = useState(text?.language);

    useEffect(()=>{
        console.log(text);
    },[text]);

    return(
        <nav>
            <a href='' className='nav-brand'><h4>Diogo Ferreira</h4></a>
            <div className="nav-options">
                <a className='nav-link big-body'>Home</a>
                <a className='nav-link big-body'>Projects</a>
                <a className='nav-link big-body'>Skills</a>
                <a className='nav-link big-body'>About</a>
                <div className='nav-language'>
                    <p className={`nav-language-option ${lang === "pt" ? 'selected' : ''}`}><b>PT</b></p>
                    <p className={`nav-language-option ${lang === "en" ? 'selected' : ''}`}><b>EN</b></p>
                </div>
            </div>

        </nav>
    );
} 

export default Navbar;