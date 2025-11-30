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
                <a className='nav-link big-body' href='#'>{txt.home}</a>
                <a className='nav-link big-body' href='#projects'>{txt.projects}</a>
                <a className='nav-link big-body' href='#skills'>{txt.skills}</a>
                <a className='nav-link big-body' href='#about'>{txt.about}</a>
                <div className='nav-language'>
                    <p className={`nav-language-option ${lang === "en" ? 'selected' : ''}`} onClick={() => onSelectLang("en")}><b>EN</b></p>
                    <p className={`nav-language-option ${lang === "pt" ? 'selected' : ''}`} onClick={() => onSelectLang("pt")}><b>PT</b></p>
                </div>
            </div>
        </nav>
    );
} 

export default Navbar;