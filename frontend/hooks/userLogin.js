import { useState } from "react";
import { useAuthContext } from "./userAuthContext";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isloading, setIsloading] = useState(null);
  const { dispatch } = useAuthContext();


  const login = async (email, password) => {
    setIsloading(true);
    setError(null);

    const response = await fetch('http://localhost:5000/v1/customer/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    const json = await response.json();

    if (!response.ok) {
      setIsloading(false);
      setError(json.error);
    }
    if (response.ok) {
      //save the user to local storage
      localStorage.setItem('user', JSON.stringify(json));

      //redirect
      window.location.href = 'http://localhost:3000/'

      //update the auth context
      dispatch({type: 'LOGIN', payload: json})

      setIsloading(false)
    }
  };

  return{login,isloading,error}
};
