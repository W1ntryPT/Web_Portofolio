import { useContext, useEffect, useState } from 'react';
import { LanguageContext } from '../../contexts';
import './navbar.css';
import { textsData } from '../../assets/data';

function Navbar(){
    const { texts, setTexts } = useContext(LanguageContext);
    const[lang, setLang] = useState(texts?.language);
    const txt = texts.txts.navbar;

    const onSelectLang = (new_lang) => {
        setLang(new_lang);
        setTexts({
            language: new_lang,
            txts: textsData[new_lang] || textsData.en
        });
    }


    return(
        <nav>
            <a href='' className='nav-brand'><h4>Diogo Ferreira</h4></a>
            <div className="nav-options">
                <a className='nav-link big-body'>{txt.home}</a>
                <a className='nav-link big-body'>{txt.projects}</a>
                <a className='nav-link big-body'>{txt.skills}</a>
                <a className='nav-link big-body'>{txt.about}</a>
                <div className='nav-language'>
                    <p className={`nav-language-option ${lang === "en" ? 'selected' : ''}`} onClick={() => onSelectLang("en")}><b>EN</b></p>
                    <p className={`nav-language-option ${lang === "pt" ? 'selected' : ''}`} onClick={() => onSelectLang("pt")}><b>PT</b></p>
                </div>
            </div>
        </nav>
    );
} 

export default Navbar;