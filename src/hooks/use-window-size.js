import { useEffect, useState } from "react";

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  function setWindowSizeValue() {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }

  useEffect(() => {
    window.addEventListener("resize", setWindowSizeValue);

    return () => window.removeEventListener("resize", setWindowSizeValue);
  }, []);

  return windowSize;
}

export default useWindowSize;