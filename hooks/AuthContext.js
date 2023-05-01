import { auth } from '../firebase';
import { useState } from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";

function useAuth() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const signIn = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
      console.log(userCredential.user)
    } catch (error) {
      setError(error.message);
      console.log(error.message);
    }
  };

  return { user, error, signIn };
}

export default useAuth;