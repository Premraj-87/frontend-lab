import { useState } from 'react';
import{validateSignup} from '../utils/validation';
const useSignup = () => {
    const[formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleChange =(e)=>{
        const {name, value} = e.target;
        setFormData((prev)=>({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit =(e)=>{
        e.preventDefault();
        const error = validateSignup(formData);
        if(error){
            alert(error);
            return;
        }
        alert('Signup successful!');
        setFormData({
            name: '',
            email: '',
            password: ''
        });
    };

  return {
    formData,
    handleChange,
    handleSubmit
  }
}
export default useSignup