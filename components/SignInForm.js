// Author: Calvin Donaldson
// Date: 07/05/2023
// Description: Sign-in form component for the modal. Allows users to enter their email and password for authentication.
import React, { useState } from 'react';
import useAuth from '../hooks/AuthContext';

const SignInForm = ({ toggle }) => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const { signIn, } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const signInError = await signIn(email, password);
    if (signInError) {
      if (signInError.code === 'auth/user-not-found') {
        setError('Invalid email or password. Please try again.');
      } else if (signInError.code === 'auth/wrong-password') {
        setError('Invalid email or password. Please try again.');
      } else {
        setError('An error occurred during sign-in. Please try again.');
      }
    
    } else {
      setEmail('');
      setPassword('');
      toggle(false);
      setError(null);
    }
  
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ color: '#222' }}
      action="login"
      className="flex flex-col h-full w-full justify-center align-center"
    >
      <h1 className="text-center">Welcome! Please Login :)</h1>
      <input
        style={{ border: '1px solid #222', margin: '20px auto' }}
        className="h-10 w-4/5 bg-gray-200 p-2 rounded"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        style={{ border: '1px solid #222', margin: '20px auto' }}
        className="h-10 w-4/5 bg-gray-200 p-2 rounded"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button type="submit" value="Login">
        Login
      </button>
    </form>
  );
};

export default SignInForm;