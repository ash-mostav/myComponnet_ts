import "./bar2.css";
import { useEffect, useState } from "react";

export default function CircleBar() {
  const [porcentagem, setPorcentagem] = useState<number>(30);

  return (
    <div className="skill">
      <div className="outer">
        <div className="inner">
          <div id="numero">{porcentagem}%</div>
        </div>
      </div>
      <svg
        version="1.1"
        width="160px"
        height="160px"
      >
        <defs>
          <linearGradient id="GradientColor">
            <stop offset="0%" stop-color="#e91e63" />
            <stop offset="100%" stop-color="#673ab7" />
          </linearGradient>
        </defs>
        <circle cx="80" cy="80" r="70" stroke-linecap="round" />
      </svg>
    </div>
  );
}
