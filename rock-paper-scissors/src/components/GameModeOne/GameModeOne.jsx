import React, { useEffect, useState } from "react";
import "../../App.css";
import UserInfoModeOne from "../GameModeOne/UserInfoModeOne";
import ChoiceButtonModeOne from "./ChoiceButtonModeOne";

function GameModOne() {
  const [user, setUser] = useState(null);
  const [ok, setOk] = useState(false);

  const choices = ["rock", "paper", "scissors"];

  const [userChoice, setUserChoice] = useState();
  const [computerChoice, setComputerChoice] = useState();
  const [userScore, setUserScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [result, setResult] = useState("");
  const [gameOver, setGameOver] = useState(false);
  const [play, setPlay] = useState(false);

  useEffect(() => {
    const str = userChoice + computerChoice;
    if (
      str === "rockscissors" ||
      str === "scissorspaper" ||
      str === "paperrock"
    ) {
      setUserScore((prev) => prev + 1);
      setResult(`${user} +1 points`);
    } else if (
      str === "scissorsrock" ||
      str === "paperscissors" ||
      str === "rockpaper"
    ) {
      setComputerScore((prev) => prev + 1);
      setResult("Computer +1 points");
    } else if (
      str === "rockrock" ||
      str === "scissorsscissors" ||
      str === "paperpaper"
    ) {
      setResult("Game Draw");
    }
  }, [play]);

  useEffect(() => {
    if (userScore === 5 || computerScore === 5) {
      setGameOver(true);
      userScore === 5
        ? setResult(`WINNER ${user} !!!!!`)
        : setResult("WINNER COMPUTER !!!!!!");
    }
  }, [userScore, computerScore]);

  const handlePlay = (e) => {
    if (!userChoice) {
      alert(`${user} must make the choice first !!!`);
    } else {
      assignmentComputerChoice();
      setPlay(!play);
    }
  };

  const assignmentComputerChoice = () => {
    const random = choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(random);
  };

  const reset = () => {
    setUserScore(0);
    setComputerScore(0);
    setGameOver(false);
    setResult("");
  };

  return !ok ? (
    <UserInfoModeOne user={user} setUser={setUser} setOk={setOk} />
  ) : (
    <div className="row text-center">
      <div className="col-sm-6">
        <div>
          <h3>
            {user} Score = {userScore}
          </h3>
          <div className="mt-5">
            {userChoice ? (
              <img
                className="userImg"
                src={require(`../../../public/img/${userChoice}.png`)}
              />
            ) : (
              <p>Butonlar ile yapacağınız işareti şeçiniz</p>
            )}
          </div>
        </div>
        <div className="mt-5 mb-5">
          <ChoiceButtonModeOne
            userChoice={userChoice}
            setUserChoice={setUserChoice}
          />
        </div>
      </div>

      <div className="col-sm-6">
        <h3>Bilgisayar Score = {computerScore}</h3>
        <div className="mt-5">
          {computerChoice ? (
            <img
              className="computerImg"
              src={require(`../../../public/img/${computerChoice}.png`)}
            />
          ) : (
            <p>
              After pressing the play button the computer will perform the
              selection
            </p>
          )}
        </div>
      </div>

      <div className="col-sm-12">
        {userScore === 5 || computerScore === 5 ? (
          <h2>{result}</h2>
        ) : (
          <strong>{result}</strong>
        )}
      </div>

      <div className="col-sm-12 mt-3">
        {!gameOver ? (
          <button
            type="button"
            className="btn btn-success px-5"
            onClick={handlePlay}
          >
            Play
          </button>
        ) : (
          <button
            type="button"
            className="btn btn-warning px-5"
            onClick={() => reset()}
          >
            Reset
          </button>
        )}
      </div>
    </div>
  );
}

export default GameModOne;
