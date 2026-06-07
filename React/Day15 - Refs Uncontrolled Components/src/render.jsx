import { useRef, useEffect } from "react";

function render() {
  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current++;
  });

  return (
    <h1>
      Renders: {renderCount.current}
    </h1>
  );
}
export default render