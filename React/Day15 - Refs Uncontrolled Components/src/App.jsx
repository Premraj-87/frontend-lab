import { useEffect, useRef } from "react";

const App = () => {
  const inputRef =useRef(null);
  useEffect(()=>{
    inputRef.current.focus();
  },[])
  const handleFocus = ()=>{
    inputRef.current.focus();
  }
  return (
    <div>

      <input ref={inputRef} placeholder="Email"/>
      <button onClick={handleFocus}>Focus input</button>
    </div>
  )
}
export default App