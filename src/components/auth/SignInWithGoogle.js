// libs
import React from 'react';
import { useFirebase } from 'react-redux-firebase';
import { useHistory } from 'react-router-dom';

const SignInWithGoogle = () => {
  const firebase = useFirebase();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    firebase
      .login({
        provider: 'google',
        type: 'popup',
      })
      .then(() => {
        history.push('/todos');
      });
  };

  return (
    <button
      type="submit"
      onClick={(e) => {
        handleSubmit(e);
      }}
    >
      Sign In with Google
    </button>
  );
};

export default SignInWithGoogle;
