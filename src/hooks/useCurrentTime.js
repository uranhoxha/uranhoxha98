import { useState, useEffect } from "react";

export function useCurrentTime() {
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(
        new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      );
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return currentTime;
}
