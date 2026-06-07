/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useRef, useEffect } from "react";

function advancedRef() {
  const [count, setCount] = useState(0);

  const prevCountRef = useRef();

  useEffect(() => {
    prevCountRef.current = count;
  }, [count]);

  return (
    <>
      <h2>Current: {count}</h2>

      <h2>
        Previous: {prevCountRef.current}
      </h2>

      <button
        onClick={() =>
          setCount(count + 1)
        }
      >
        Increase
      </button>
    </>
  );
}
export default advancedRef;