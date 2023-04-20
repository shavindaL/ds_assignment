import { useState } from "react";
import { useAuthContext } from "./userAuthContext";

export const sellerLogin = () => {
  const [error, setError] = useState(null);
  const { dispatch } = useAuthContext();


  const slogin = async (email, password) => {
    
    setError(null);
// console.log(email, password)
    
    const response = await fetch('http://localhost:5000/v1/seller/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    console.log(response)

    const json = await response.json();

    if (!response.ok) {
      
      setError(json.error);
    }
    if (response.ok) {
      //save the user to local storage
      localStorage.setItem('seller', JSON.stringify(json));

      //redirect
      window.location.href = 'https://www.youtube.com/'

      //update the auth context
      dispatch({type: 'LOGIN', payload: json})

      
    }
  };

  return{slogin,error}
};