import { useState } from "react";

const Loader = () => {
    const [loading, setLoading] = useState(false)
     
   const handleLoad =() => {
    setLoading(true)
    setTimeout(() => {
        setLoading(false)
    }, 3000);
    }
  return (
    <div>
        
        <button onClick={handleLoad}>Load</button>
{loading ? (
        <h2>Loading...</h2>
      ) : (
        <h2>Data Loaded ✅</h2>
      )}

    </div>

  )
}
export default Loader