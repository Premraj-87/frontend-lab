/* eslint-disable react-hooks/rules-of-hooks */
import { useRef } from "react";

const uncontrolled = () => {
    const nameRef = useRef(null);
    const emailRef=useRef(null);

    const handleSubmit =()=>{
         const formData = {
      name: nameRef.current.value,
      email: emailRef.current.value,
    };

    console.log(formData);
    }
  return (
    <div>
         <input
        ref={nameRef}
        placeholder="Name"
      />

      <input
        ref={emailRef}
        placeholder="Email"
      />

      <button onClick={handleSubmit}>
        Submit
      </button>
   
    </div>
  )
}
export default uncontrolled