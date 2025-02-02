import { GameProps } from "types/types";

import wordList from "./words_list.json";
import Card from "./Card";
import "./Game.css";

const Game = ({ role }: GameProps) => {
  const randomWordList = wordList.classic.sort(() => Math.random() - 0.5).slice(0, 25);
  // Split the words into the different categories
  const redWords = randomWordList.slice(0, 8);
  const blueWords = randomWordList.slice(8, 16);
  const blackWord = randomWordList[16];
  const neutralWords = randomWordList.slice(17, 25);
  // Shuffle the words
  const shuffledWords = [...redWords.map(word => ({ word, type: "red" })), ...blueWords.map(word => ({ word, type: "blue" })), { word: blackWord, type: "black" }, ...neutralWords.map(word => ({ word, type: "neutral" }))].sort(() => Math.random() - 0.5);

  let cardList = shuffledWords.map((card, index) => <Card key={index} word={card.word} type={card.type} />);
  // Assign the words to the cards
  if (role === "Operative") {
    cardList = shuffledWords.map((card, index) => <Card key={index} word={card.word} type="neutral" />);
  }

  return (
    <div className="Game">
      <h1 className="Role">{role}</h1>
      <div className="CardGrid">{cardList}</div>
    </div>
  );
};

export default Game;
