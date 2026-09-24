import { useContext, useRef, useEffect, useState } from "react";
import { LanguageContext, PageContext } from "../../../contexts";
import "./about.css";
import useIsVisible from "../../../utils/useIsVisible";

function About() {
  const { texts, setTexts } = useContext(LanguageContext);
  const txt = texts.txts.about;

  const { setCurrent } = useContext(PageContext);
  const ref = useRef();
  const cardRefs = useRef([]);
  const isVisible = useIsVisible(ref);
  useEffect(() => {
    if (isVisible) setCurrent("about");
  }, [isVisible]);
  const [visibleCards, setVisibleCards] = useState(1);

  return (
    <section id="about" ref={ref}>
      <h2 className="title">{txt.title}</h2>

      <div className="about-content">
        {txt.cards.slice(0, visibleCards).map((card, index) => (
          <div className="card-wrapper" key={index}>
            <div className="card" ref={(el) => (cardRefs.current[index] = el)}>
              <div className="card-content">
                <div className="about-text">
                  <h3 className="about-title">{card.subtitle}</h3>

                  <div className="about-info">
                    {card.text.map((text, index) => (
                      <p
                        key={index}
                        dangerouslySetInnerHTML={{ __html: text }}
                      />
                    ))}
                  </div>
                </div>

                <img
                  src={`${process.env.PUBLIC_URL}/imgs/about/${card.image}`}
                  alt={card.subtitle}
                />
              </div>
            </div>

            {index === visibleCards - 1 && visibleCards < txt.cards.length && (
              <button
                className="card-arrow"
                onClick={() => {
                  const nextIndex = visibleCards;

                  setVisibleCards(visibleCards + 1);

                  setTimeout(() => {
                    cardRefs.current[nextIndex]?.scrollIntoView({
                      behavior: "smooth",
                      block: "center",
                    });
                  }, 100);
                }}
                aria-label="Mostrar próximo cartão"
              >
                <img
                  src={`${process.env.PUBLIC_URL}/imgs/about/arrow-down.png`}
                  alt=""
                />
              </button>
            )}
          </div>
        ))}
      </div>

      <div className="contact-section">
        <div className="contact-text">
          <b>{txt.contact}</b>
        </div>
        <div className="contact-icon">
          <div className="contact-method email">
            <a
              href={`mailto:${txt.email}`}
              target="_blank"
              title="Send me an email"
            >
              <img
                src={`${process.env.PUBLIC_URL}/imgs/contacts/${txt.images.email}`}
                alt={txt.email}
              />
              <span>{txt.methods.email}</span>
            </a>
          </div>
          <div className="contact-method linkedin">
            <a
              href={`https://${txt.linkedin}`}
              target="_blank"
              title="LinkedIn"
            >
              <img
                src={`${process.env.PUBLIC_URL}/imgs/contacts/${txt.images.linkedin}`}
                alt={txt.images.linkedin}
              />
              <span>{txt.methods.linkedin}</span>
            </a>
          </div>
          <div className="contact-method github">
            <a href={`${txt.github}`} target="_blank" title="Github">
              <img
                src={`${process.env.PUBLIC_URL}/imgs/contacts/${txt.images.github}`}
                alt={txt.images.github}
              />
              <span>{txt.methods.github}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
