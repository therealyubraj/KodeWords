import { Link } from "react-router-dom";
import { useState } from "react";
import "./Home.css";

const Home = () => {
  const [roomid, setRoomid] = useState("");
  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRoomid(event.target.value);
  };
  const onRandomButtonClick = () => {
    const randomRoomid = Math.floor(10000 + Math.random() * 90000).toString();
    setRoomid(randomRoomid);
  };
  return (
    <div className="Home">
      <h1 className="Title">Home</h1>
      <div className="InputContainer">
        <input placeholder="Enter Room ID" onChange={onInputChange} value={roomid} />
        <button className="Button" onClick={onRandomButtonClick}>
          🎲
        </button>
      </div>
      <div className="ButtonContainer">
        <Link to={`/game/spymaster/${roomid}`} className="Link">
          <button className="Button Spymaster" onClick={() => {}}>
            Join as Spymaster
          </button>
        </Link>
        <Link to={`/game/operative/${roomid}`} className="Link">
          <button className="Button Operative">Join as Operatives</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
