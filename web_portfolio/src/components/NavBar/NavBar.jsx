import { useContext, useEffect, useState } from "react";
import { LanguageContext, PageContext } from "../../contexts";
import "./Navbar.css";
import { textsData } from "../../assets/data";

function Navbar() {
  const { texts, setTexts } = useContext(LanguageContext);
  const [lang, setLang] = useState(texts?.language);
  const txt = texts.txts.navbar;

  const { current, setCurrent } = useContext(PageContext);

  const onSelectLang = (new_lang) => {
    setLang(new_lang);
    setTexts({
      language: new_lang,
      txts: textsData[new_lang] || textsData.en,
    });
  };

  const [visibleMenu, setVisibleMenu] = useState(false);

  return (
    <nav>
      <a href="" className="nav-brand">
        <h4>Diogo Ferreira</h4>
      </a>
      <div className="nav-options">
        <button
          className="menu-btn"
          onClick={() => {
            setVisibleMenu(!visibleMenu);
          }}
        >
          <img src={`${process.env.PUBLIC_URL}/imgs/navbar/menu.jpg`} />
        </button>
        <a
          className={`nav-link ${current === "home" ? "selected" : ""}`}
          href="#"
        >
          {txt.home}
        </a>
        <a
          className={`nav-link ${current === "projects" ? "selected" : ""}`}
          href="#projects"
        >
          {txt.projects}
        </a>
        <a
          className={`nav-link ${current === "skills" ? "selected" : ""}`}
          href="#skills"
        >
          {txt.skills}
        </a>
        <a
          className={`nav-link ${current === "about" ? "selected" : ""}`}
          href="#about"
        >
          {txt.about}
        </a>
        <div className="nav-language">
          <p
            className={`nav-language-option ${lang === "en" ? "selected" : ""}`}
            onClick={() => onSelectLang("en")}
          >
            <b>EN</b>
          </p>
          <p
            className={`nav-language-option ${lang === "pt" ? "selected" : ""}`}
            onClick={() => onSelectLang("pt")}
          >
            <b>PT</b>
          </p>
        </div>
      </div>
      <div className={`menu-phone ${visibleMenu ? "open" : ""}`}>
        <a
          href="#"
          className={current === "home" ? "selected" : ""}
          onClick={() => {
            setCurrent("home");
            setVisibleMenu(false);
          }}
        >
          {txt.home}
        </a>

        <a
          href="#projects"
          className={current === "projects" ? "selected" : ""}
          onClick={() => {
            setCurrent("projects");
            setVisibleMenu(false);
          }}
        >
          {txt.projects}
        </a>

        <a
          href="#skills"
          className={current === "skills" ? "selected" : ""}
          onClick={() => {
            setCurrent("skills");
            setVisibleMenu(false);
          }}
        >
          {txt.skills}
        </a>

        <a
          href="#about"
          className={current === "about" ? "selected" : ""}
          onClick={() => {
            setCurrent("about");
            setVisibleMenu(false);
          }}
        >
          {txt.about}
        </a>
        <div className="menu-phone-language">
          <p
            className={lang === "en" ? "selected" : ""}
            onClick={() => onSelectLang("en")}
          >
            EN
          </p>

          <p
            className={lang === "pt" ? "selected" : ""}
            onClick={() => onSelectLang("pt")}
          >
            PT
          </p>
        </div>
        <button
          className="menu-close"
          onClick={() => {
            setVisibleMenu(!visibleMenu);
          }}
        >
          <img src={`${process.env.PUBLIC_URL}/imgs/navbar/close.jpg`} />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
