import React, { useEffect, useRef } from "react";

export default function CanvasGame({
  canvasRef,
  keys,
  setScore,
  setLevel,
  setGameState,
  gameState,
  coinSound,
  jumpSound,
  levels,
  level,
  gameOverSound,
  winSound,
}) {
  const playerRef = useRef({
    x: 50,
    y: 300,
    width: 55,
    height: 55,
    velocityY: 0,
    jumpPower: -12,
    gravity: 0.6,
    grounded: false,
  });
  useEffect(() => {
    const player = playerRef.current;
    player.x = 50;
    player.y = 300;
    player.velocityY = 0;
    player.grounded = false;
  }, [level]);
  useEffect(() => {
    if (gameState !== "playing") return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const resizeCanvas = () => {
      canvas.width = window.innerWidth * 0.95;
      canvas.height = window.innerHeight * 0.6;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const playerImg = new Image();
    playerImg.src = "/images/player.png";
    const coinImg = new Image();
    coinImg.src = "/images/coin.png";
    const enemyImg = new Image();
    enemyImg.src = "/images/enem1.png";
    const goalImg = new Image();
    goalImg.src = "/images/goal.png";
    // canvas.width = 800;
    // canvas.height = 400;
    const player = playerRef.current;
    const keyDown = (e) => {
      if (e.code === "ArrowLeft") keys.left = true;
      if (e.code === "ArrowRight") keys.right = true;
      if (e.code === "Space" && player.grounded) {
        keys.up = true;
        player.velocityY = player.jumpPower;
        player.grounded = false;
        jumpSound.play();
      }
    };

    const keyUp = (e) => {
      if (e.code === "ArrowLeft") keys.left = false;
      if (e.code === "ArrowRight") keys.right = false;
      if (e.code === "Space") keys.up = false;
    };

    window.addEventListener("keydown", keyDown);
    window.addEventListener("keyup", keyUp);
    let animationFrameId;

    const currentLevel = JSON.parse(JSON.stringify(levels[level]));
    const loop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      // const lvl = currentLevel;
      const lvl = levels[level];
      if (!lvl) return;

      // scale og screen
      const scaleX = canvas.width / 800;
      const scaleY = canvas.height / 400;

      // Player movement
      if (keys.right) player.x += 4;
      if (keys.left) player.x -= 4;

      player.velocityY += player.gravity;
      player.y += player.velocityY;

      // Platform collision
      player.grounded = false;
      lvl.platforms.forEach((p) => {
        if (
          player.x * scaleX < (p.x + p.width) * scaleX &&
          (player.x + player.width) * scaleX > p.x * scaleX &&
          (player.y + player.height) * scaleY <= (p.y + 10) * scaleY &&
          (player.y + player.height + player.velocityY) * scaleY >= p.y * scaleY
        ) {
          player.y = p.y - player.height;
          player.velocityY = 0;
          player.grounded = true;
        }
      });

      // Enemy movement & collision
      lvl.enemies.forEach((en) => {
        en.x += en.dir * 2;
        if (en.x < 200 || en.x > 750) en.dir *= -1;

        if (
          player.x < en.x + en.w &&
          player.x + player.width > en.x &&
          player.y < en.y + en.h &&
          player.y + player.height > en.y
        ) {
          setGameState("gameover");
          gameOverSound.play();
        }
      });

      // Coins
      lvl.coins.forEach((c) => {
        if (!c.collected) {
          const dx = player.x + player.width / 2 - c.x;
          const dy = player.y + player.height / 2 - c.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < c.r + player.width / 2) {
            c.collected = true;
            setScore((s) => s + 10);
            coinSound.play();
          }
        }
      });

      // Goal
      if (
        player.x < lvl.goal.x + lvl.goal.w &&
        player.x + player.width > lvl.goal.x &&
        player.y < lvl.goal.y + lvl.goal.h &&
        player.y + player.height > lvl.goal.y
      ) {
        if (level < levels.length - 1) {
          setLevel((prev) => prev + 1);
        } else {
          setGameState("win");
          winSound.play();
        }
      }

      // Draw
      ctx.fillStyle = "green";
      lvl.platforms.forEach((p) =>
        ctx.fillRect(
          p.x * scaleX,
          p.y * scaleY,
          p.width * scaleX,
          p.height * scaleY
        )
      );

      //coins
      // ctx.fillStyle = "yellow";
      lvl.coins.forEach((c) => {
        if (!c.collected) {
          // ctx.beginPath();
          // ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
          // ctx.fill();
          ctx.drawImage(
            coinImg,
            (c.x - c.r) * scaleX,
            (c.y - c.r) * scaleY,
            c.r * 2 * scaleX,
            c.r * 2 * scaleY
          );
        }
      });

      //enemy
      // ctx.fillStyle = "red";
      // lvl.enemies.forEach((en) => ctx.fillRect(en.x, en.y, en.w, en.h));
      lvl.enemies.forEach((en) =>
        ctx.drawImage(
          enemyImg,
          en.x * scaleX,
          en.y * scaleY,
          en.w * scaleX,
          en.h * scaleY
        )
      );

      //goal
      // ctx.fillStyle = "cyan";
      // ctx.fillRect(lvl.goal.x, lvl.goal.y, lvl.goal.w, lvl.goal.h);
      ctx.drawImage(
        goalImg,
        lvl.goal.x * scaleX,
        lvl.goal.y * scaleY,
        lvl.goal.w * scaleX,
        lvl.goal.h * scaleY
      );

      //player
      // ctx.fillStyle = player.color;
      // ctx.fillRect(player.x, player.y, player.width, player.height);
      ctx.drawImage(
        playerImg,
        player.x * scaleX,
        player.y * scaleY,
        player.width * scaleX,
        player.height * scaleY
      );

      animationFrameId = requestAnimationFrame(loop);
    };

    loop();

    return () => {
      window.removeEventListener("keydown", keyDown);
      window.removeEventListener("keyup", keyUp);
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [
    canvasRef,
    keys,
    setScore,
    setLevel,
    setGameState,
    coinSound,
    jumpSound,
    gameOverSound,
    winSound,
  ]);
  return null;
}
