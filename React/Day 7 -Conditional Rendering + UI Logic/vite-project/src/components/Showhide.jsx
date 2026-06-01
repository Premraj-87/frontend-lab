import { useState } from "react";
const Showhide = () => {
    const[showPassword, setShowPassword] = useState(false); 

  return (
    <div>Showhide
        <br></br>
        <input
        type={showPassword ? "text" : "password"}
        placeholder="Enter Password"
        />
        <br></br>
        <button
        onClick={() => setShowPassword(!showPassword)}
        >
            {showPassword ? "Hide" : "Show"}
        </button>
    </div>
  )
}
export default Showhide