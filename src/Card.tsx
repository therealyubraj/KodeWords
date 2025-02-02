import "./Card.css";
import { CardProps } from "../types/types";
import React, { useEffect, useReducer, useState } from "react";

const Card = ({ word, type }: CardProps) => {
  const [cardImage, setCardImage] = useState();
  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await import(`./assets/card/${type}.png`);
        if (response.default) setCardImage(response.default);
      } catch (e) {
        console.log(e);
      }
    };
    fetchImage();
  }, [type]);
  const fontColor = type == "black" ? "white" : "black";
  let cardType = type == "black" ? "assassian" : type;
  return (
    <div className="Card">
      <img src={cardImage} alt={`Card_${type}`} className="CardImage" />
      <h2 className="CardType">{cardType.toUpperCase()}</h2>
      <h1 className="CardWord" style={{ color: fontColor }}>
        {word}
      </h1>
    </div>
  );
};

export default Card;
