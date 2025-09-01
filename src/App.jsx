import { useEffect, useRef, useState } from "react";
import { Howl } from "howler";
import levels from "./Components1/Levels/LevelsGame";
import CanvasGame from "./Components1/CanvasGame/CanvasGame";
import "@fortawesome/fontawesome-free/css/all.min.css";
function App() {
  useEffect(() => {
    localStorage.removeItem("score");
    localStorage.removeItem("level");
  }, []); // Runs only once when App mounts

  const canvasRef = useRef(null);
  const [score, setScore] = useState(
    () => Number(localStorage.getItem("score")) || 0
  );
  const [level, setLevel] = useState(
    () => Number(localStorage.getItem("level")) || 0
  );

  useEffect(() => {
    localStorage.setItem("score", score);
    localStorage.setItem("level", level);
  }, [score, level]);
  // const [level, setLevel] = useState(0);
  // const [score, setScore] = useState(0);
  const [gameState, setGameState] = useState("playing"); // playing | gameover | win

  // Load sounds
  const coinSound = new Howl({ src: ["/sounds/coin.mp3"] });
  const jumpSound = new Howl({ src: ["/sounds/jump.mp3"] });
  const gameOverSound = new Howl({ src: ["/sounds/lose.mp3"] });
  const winSound = new Howl({ src: ["/sounds/win.mp3"] });

  const keys = { left: false, right: false, up: false };

  return (
    <div className="flex flex-col px-4 items-center justify-center min-h-screen bg-[url(/images/subtle-prism.svg)] bg-cover bg-center text-white ">
      {gameState === "playing" && (
        <>
          <h1 className="sm:text-2xl font-bold text-amber-400 text-xl sm:mb-4 mb-2">
            Score: {score} | Level: {level + 1}
          </h1>
          <div className="w-full flex justify-center">
            <canvas
              ref={canvasRef}
              className=" bg-[url(/images/platform.jpg)] bg-cover bg-center rounded-lg shadow-lg w-[95%] sm:w-[800px]  h-[50vh] sm:h-[400px]"
            />
          </div>
          <div className="flex  gap-4 mt-7 justify-between   w-full lg:hidden">
            <div className=" flex gap-3 self-start order-1">
              <button
                className=" bg-emerald-600 cursor-pointer px-4 py-2 border-2 border-b-cyan-900 rounded-full text-xl"
                onTouchStart={() => (keys.left = true)}
                onTouchEnd={() => (keys.left = false)}
              >
                <i className="fa-solid fa-arrow-left"></i>
              </button>

              <button
                className=" bg-emerald-600 cursor-pointer px-4 py-2 border-2 border-b-cyan-900 rounded-full text-xl"
                onTouchStart={() => (keys.right = true)}
                onTouchEnd={() => (keys.right = false)}
              >
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div> 

            <button
              className=" bg-emerald-600 cursor-pointer px-4 py-2 border-2 border-b-cyan-900 rounded-full text-xl"
              onTouchStart={() => {
                keys.up = true;
              }}
              onTouchEnd={() => (keys.up = false)}
            >
              <i className="fa-solid fa-arrow-up text-2xl text-white"></i>
            </button>
          </div>
          <CanvasGame
            canvasRef={canvasRef}
            keys={keys}
            setScore={setScore}
            setLevel={setLevel}
            setGameState={setGameState}
            gameState={gameState}
            coinSound={coinSound}
            jumpSound={jumpSound}
            levels={levels}
            level={level}
            gameOverSound={gameOverSound}
            winSound={winSound}
          />
        </>
      )}
      {gameState === "gameover" && (
        <div className="text-center w-full">
          <h1 className="text-6xl mb-28 text-shadow-red-600 text-shadow-lg text-red-800">
            💀 Game Over!{" "}
          </h1>
          <button
            className=" bg-cyan-600 text-xl shadow-cyan-600 shadow-2xl px-4 py-2 rounded-lg cursor-pointer"
            onClick={() => {
              setScore(0);
              setLevel(0);
              setGameState("playing");
              localStorage.removeItem("score");
              localStorage.removeItem("level");
              levels.forEach((lvl) => {
                lvl.coins.forEach((c) => (c.collected = false));
              });
            }}
          >
            Restart
          </button>
        </div>
      )}
      {gameState === "win" && (
        <div className="text-center">
          <h1 className="text-6xl mb-16 text-shadow-emerald-500 text-shadow-lg text-green-500">
            🎉 You Win!
          </h1>
          <p className="mb-4 text-2xl text-amber-400">Final Score: {score}</p>
          <button
            className="bg-cyan-600 text-xl shadow-cyan-600 shadow-2xl px-4 py-2 rounded-lg cursor-pointer"
            onClick={() => {
              setScore(0);
              setLevel(0);
              setGameState("playing");
              localStorage.removeItem("score");
              localStorage.removeItem("level");
              levels.forEach((lvl) => {
                lvl.coins.forEach((c) => (c.collected = false));
              });
            }}
          >
            Play Again
          </button>
        </div>
      )}
    </div>
  );
}

export default App;

