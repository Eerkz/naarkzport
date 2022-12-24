import { useState, useEffect } from "react";

export default function useWindowSize() {
  const [width, setWidth] = useState(() => (typeof window !== 'undefined') && (window.innerWidth));
  const [height, setHeight] = useState(() => (typeof window !== 'undefined') && (window.innerHeight));

  useEffect(() => {
    const handleWindowResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleWindowResize);
    }

    // Return a function from the effect that removes the event listener
    return () => window.removeEventListener("resize", handleWindowResize);
  });

  return { width: width, height: height };
}
