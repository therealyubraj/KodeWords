import wordList from "./words_list.json";
import { Link } from "react-router-dom";
import Card from "./Card";
import "./Game.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function RNG(seed: number) {
  var m = 2 ** 35 - 31;
  var a = 185852;
  var s = seed % m;
  return (s = (s * a) % m) / m;
}

type WordType = {
  word: string;
  type: string;
};
const Game = () => {
  const { role, roomid } = useParams();

  const randomWordList: Array<string> = [];
  const randomStart = Math.floor(RNG(Number(roomid)) * 1000) % wordList.classic.length;

  for (let i = 0; i < 25; i++) {
    const index = randomStart + i;
    console.log(index);
    const randomWord = wordList.classic[index];
    randomWordList.push(randomWord);
  }

  // Split the words into the different categories
  const redWords = randomWordList.slice(0, 8);
  const blueWords = randomWordList.slice(8, 16);
  const blackWord = randomWordList[16];
  const neutralWords = randomWordList.slice(17, 25);

  // Shuffle the words
  const shuffledWords = [...redWords.map(word => ({ word, type: "red" })), ...blueWords.map(word => ({ word, type: "blue" })), { word: blackWord, type: "black" }, ...neutralWords.map(word => ({ word, type: "neutral" }))].sort(() => Math.random() - 0.5);

  let cardList = shuffledWords.map((card, index) => <Card key={index} word={card.word} type={card.type} />);
  // Assign the words to the cards
  if (role === "operative") {
    cardList = shuffledWords.map((card, index) => <Card key={index} word={card.word} type="neutral" />);
  }

  return (
    <div className="Game">
      <nav>
        <Link to="/" className="Link">
          <button className="Button">HOME</button>
        </Link>
        <h1 className="Role">{role?.toUpperCase()}</h1>
        <h3 className="Roomid">Room ID: {roomid}</h3>
      </nav>
      <div className="CardGrid">{cardList}</div>
    </div>
  );
};

export default Game;
