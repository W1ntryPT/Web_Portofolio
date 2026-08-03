import { useContext, useEffect, useState } from 'react';
import { LanguageContext, PageContext } from '../../contexts';
import './Navbar.css';
import { textsData } from '../../assets/data';

function Navbar(){
    const { texts, setTexts } = useContext(LanguageContext);
    const[lang, setLang] = useState(texts?.language);
    const txt = texts.txts.navbar;

    const {current} = useContext(PageContext)


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
                <a className={`nav-link ${current === 'home' ? 'selected' : ''}`} href='#'>{txt.home}</a>
                <a className={`nav-link ${current === 'projects' ? 'selected' : ''}`} href='#projects'>{txt.projects}</a>
                <a className={`nav-link ${current === 'skills' ? 'selected' : ''}`} href='#skills'>{txt.skills}</a>
                <a className={`nav-link ${current === 'about' ? 'selected' : ''}`} href='#about'>{txt.about}</a>
                <div className='nav-language'>
                    <p className={`nav-language-option ${lang === "en" ? 'selected' : ''}`} onClick={() => onSelectLang("en")}><b>EN</b></p>
                    <p className={`nav-language-option ${lang === "pt" ? 'selected' : ''}`} onClick={() => onSelectLang("pt")}><b>PT</b></p>
                </div>
            </div>
        </nav>
    );
} 

export default Navbar;