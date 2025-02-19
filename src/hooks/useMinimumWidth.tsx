import { useEffect, useState } from "react";

export default function useMinimumScreenWidth(minWidth: number) {
  const SCREEN_ORIENTATION = {
    LANDSCAPE: "landscape",
    PORTRAIT: "portrait",
  };
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
    orientation:
      window.innerWidth > window.innerHeight
        ? SCREEN_ORIENTATION.LANDSCAPE
        : SCREEN_ORIENTATION.PORTRAIT,
  });

  const requirementMet = () => screenSize.width > minWidth;

  useEffect(() => {
    function handleResize() {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
        orientation:
          window.innerWidth > window.innerHeight
            ? SCREEN_ORIENTATION.LANDSCAPE
            : SCREEN_ORIENTATION.PORTRAIT,
      });
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { screenSize, requirementMet };
}
