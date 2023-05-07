// Author: Calvin Donaldson
// Date: 07/05/2023
// Description: Sign-in form component for the modal. Allows users to enter their email and password for authentication.
import React, { useState } from 'react';
import useAuth from '../hooks/AuthContext';

const SignInForm = ({ toggle }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const { signIn } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }

    try {
      // Perform sign-in operation here
      // For example, call the signIn function from useAuth hook
      await signIn(email, password);

      // Reset the form and error state after successful sign-in
      setEmail('');
      setPassword('');
      setError('');
      toggle(false);
    } catch (error) {
      // Handle sign-in error
      console.log(error);
      setError('An error occurred during sign-in. Please try again.');
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