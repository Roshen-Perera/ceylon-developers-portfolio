"use client";

import { useEffect, useRef } from "react";
import LeaderLine from "leader-line-new";

export default function Diagram() {
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (card1Ref.current && card2Ref.current) {
      const line = new LeaderLine(card1Ref.current, card2Ref.current, {
        color: "#000",
        size: 3,
        startPlug: "behind",
        endPlug: "arrow1",
        path: "straight",
      });

      return () => line.remove(); // cleanup on component unmount
    }
  }, []);

  return (
    <div style={{ position: "relative", width: "100%", height: "500px" }}>
      <div
        ref={card1Ref}
        style={{
          width: 150,
          height: 80,
          background: "#e3e3e3",
          borderRadius: 10,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
          top: 100,
          left: 100,
        }}
      >
        Card 1
      </div>

      <div
        ref={card2Ref}
        style={{
          width: 150,
          height: 80,
          background: "#e3e3e3",
          borderRadius: 10,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
          top: 300,
          left: 300,
        }}
      >
        Card 2
      </div>
    </div>
  );
}
