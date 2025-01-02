"use client";

import { useEffect, useState } from "react";

const CursorLightEffect = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: any) => {
      setCursorPosition({ x: e.pageX, y: e.pageY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-50 transition duration-300 md:absolute"
      style={{
        background: `radial-gradient(600px at ${cursorPosition.x}px ${cursorPosition.y}px, rgba(144,243,86, 0.1), transparent 70%)`,
      }}
    ></div>
  );
};

export default CursorLightEffect;
