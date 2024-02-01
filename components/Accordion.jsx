import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function Accordion({ title, content }) {
  const [activeAccordion, setActiveAccordion] = useState(false);

  return (
    <>
      <div className="accordion__card">
        <div
          className="accordion__header"
          onClick={() => setActiveAccordion(!activeAccordion)}
        >
          <div className="accordion__title">{title}</div>
          <div>
            {activeAccordion ? (
              <FontAwesomeIcon icon={faChevronUp} className="accordion__icon" />
            ) : (
              <FontAwesomeIcon
                icon={faChevronUp}
                rotation={180}
                className="accordion__icon"
              />
            )}
          </div>
        </div>
        {activeAccordion && <div className="accordion__body">{content}</div>}
      </div>
    </>
  );
}
