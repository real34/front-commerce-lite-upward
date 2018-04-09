import React from "react";
import Price from "../../atoms/Typography/Price";
import "./RecapTotal.scss";

const RecapTotal = ({ image, actions, title, price }) => {
  return (
    <div className="recap-total">
      <div className="recap-total__title">{title}</div>
      <div className="recap-total__price">
        <Price price={price} />
      </div>
    </div>
  );
};

export default RecapTotal;
