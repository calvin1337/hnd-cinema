import { auth } from '../firebase';
import { useState } from 'react';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import React from 'react';

export const AuthContext = React.createContext({});

export const useAuthContext = () => React.useContext(AuthContext);

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

  const signUp = async (email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
    } catch (error) {
      setError(error.message);
      console.log(error.message);
    }
  }



  return { user, error, signIn, signUp };
}

export default useAuth;

export const AuthContextProvider = ({
  children,
}) => {
  const [user, setUser] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
          if (user) {
              setUser(user);
          } else {
              setUser(null);
          }
          setLoading(false);
      });

      return () => unsubscribe();
  }, []);

  return (
      <AuthContext.Provider value={{ user }}>
          {loading ? <div>Loading...</div> : children}
      </AuthContext.Provider>
  )};