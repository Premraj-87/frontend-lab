import  { useState } from 'react'
const Online = () => {
    const [online, setOnline] = useState(true);
    


  return (
    <div>
        <h2>
          {online
    ? "🟢 Online"
    : "🔴 Offline"}
        </h2>
        <button
          onClick={() => setOnline(!online)}
        >
          Toggle Online Status

        </button>

        
    </div>
  )
}
export default Online