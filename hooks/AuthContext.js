import { auth } from '../firebase';
import { useState } from 'react';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, updateProfile } from "firebase/auth";
import React from 'react';
import { Spinner } from '@/components/layout/Spinner';
import { collection, addDoc, doc, setDoc } from 'firebase/firestore';
import { db } from '@/firebase';

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

  const signUp = async (email, password, displayName) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      console.log(userCredential.user, "TEST")
      setUser(userCredential.user);

    const user = userCredential.user;
    await updateProfile(user, { displayName: displayName });
     
      
const userRef = doc(db, "users", userCredential.user.uid);
const payload = {
  email: userCredential.user.email,
  displayName: displayName
};
await setDoc(userRef, payload);
      
      
    } catch (error) {
      setError(error.message);
      console.log(error.message);
    }

  }

  const signOut = async () => {
    try {
      await auth.signOut();
      setUser(null);
    } catch (error) {
      setError(error.message);
      console.log(error.message);
    }
  }



  return { user, error, signIn, signUp, signOut };
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
          {loading ? <Spinner /> : children}
      </AuthContext.Provider>
  )};