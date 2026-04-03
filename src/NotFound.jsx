import { useEffect, useState } from "react";
import "./NotFound.css";

export default function NotFoundPage() {

  const [player, setPlayer] = useState({ x: 20, y: 20 });
  const [bug, setBug] = useState({ x: 220, y: 220 });
  const [score, setScore] = useState(0);

  // Handle arrow key movement
  useEffect(() => {
    const move = (e) => {
      setPlayer((p) => {
        let x = p.x, y = p.y;

        if (e.key === "ArrowUp") y -= 12;
        if (e.key === "ArrowDown") y += 12;
        if (e.key === "ArrowLeft") x -= 12;
        if (e.key === "ArrowRight") x += 12;

        x = Math.max(0, Math.min(260, x));
        y = Math.max(0, Math.min(260, y));

        return { x, y };
      });
    };

    window.addEventListener("keydown", move);
    return () => window.removeEventListener("keydown", move);
  }, []);

  // Detect collision
  useEffect(() => {
    const dx = Math.abs(player.x - bug.x);
    const dy = Math.abs(player.y - bug.y);

    if (dx < 30 && dy < 30) {
      setScore(score + 1);

      // Move bug to random new spot
      setBug({
        x: Math.floor(Math.random() * 250),
        y: Math.floor(Math.random() * 250),
      });
    }
  }, [player]);

  return (
    <div className="nf-container">

      <div className="nf-card">
         <h1 className="nf-title">404 - Page Not Found</h1>
        <img src="./src/notfound.png" className="nf-img" alt="404" width="400px" height="300px"/>
        
        <p className="nf-sub">A bug escaped! Catch it using arrow keys 🐞</p>
        <p className="score">Score: {score}</p>

        <div className="game-box">
          <div className="player" style={{ left: player.x, top: player.y }}>
            👨‍💻
          </div>
          <div className="bug" style={{ left: bug.x, top: bug.y }}>
            🐞
          </div>
        </div>
      </div>

    </div>
  );
}