import "./Home.css";
const Home = () => {
  return (
    <div className="Home">
      <h1 className="Title">Home</h1>
      <input className="Input" placeholder="Enter Room ID" />
      <div className="ButtonContainer">
        <button className="Button Spymaster">Join as Spymaster</button>
        <button className="Button Operative">Join as Operatives</button>
      </div>
    </div>
  );
};

export default Home;
