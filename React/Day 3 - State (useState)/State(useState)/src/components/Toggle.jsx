import { useState } from "react";


function App() {
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? " dark-mode" : "light-mode"}>
      <h1>{dark ? "🌑Dark Mode" : "🌞Light Mode"}</h1>

      <button onClick={() => setDark(!dark)}>
        Toggle
      </button>
    </div>
  );
}

export default App;
