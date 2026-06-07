import { useRef } from "react";

function timerId() {
  const timerRef = useRef(null);

  const startTimer = () => {
    timerRef.current = setInterval(() => {
      console.log("Running");
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(timerRef.current);
  };

  return (
    <>
      <button onClick={startTimer}>
        Start
      </button>

      <button onClick={stopTimer}>
        Stop
      </button>
    </>
  );
}

export default timerId;