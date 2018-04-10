import React from "react";
import { H3 } from "../../atoms/Typography/Heading";
import TitleWithPrice from "../../molecules/TitleWithPrice";
import "./RecapLineWithImage.scss";

const RecapLineWithImage = ({ image, actions, title, price }) => {
  return (
    <div className="recap-line-with-image">
      <div className="recap-line-with-image__image">{image}</div>
      <div className="recap-line-with-image__content">
        <TitleWithPrice component={H3} price={price}>
          {title}
        </TitleWithPrice>
        {actions && (
          <div className="recap-line-with-image__actions">{actions}</div>
        )}
      </div>
    </div>
  );
};

export default RecapLineWithImage;
