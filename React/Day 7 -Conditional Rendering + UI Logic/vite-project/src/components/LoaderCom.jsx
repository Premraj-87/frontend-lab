import { useState } from "react"
const LoaderCom = () => {
    const[loading, setLoading] = useState(true)
     const handleFetchData = () => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 2000)
        }

  return (
    <div>
        <button
        onClick={handleFetchData}
        >Fetch Data</button>
        {loading ? (
            <p>Loading...</p>
        ) : (
            <p>Data fetched successfully!</p>
        )}
       
    </div>
  )
}
export default LoaderCom