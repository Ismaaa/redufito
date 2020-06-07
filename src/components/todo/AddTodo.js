// libs
import React, { useState } from 'react';
import { useFirestore } from 'react-redux-firebase';
import { useSelector } from 'react-redux';

const AddTodo = () => {
  const firestore = useFirestore();
  const [todo, setToDo] = useState('');
  const { uid } = useSelector((state) => state.firebase.auth);

  const handleChange = (e) => {
    setToDo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    firestore
      .collection('users')
      .doc(uid)
      .collection('todos')
      .add({
        title: todo,
        isDone: false,
      })
      .catch((error) => {
        console.warn(error);
      });
    setToDo('');
  };

  return (
    <div>
      <form action="">
        <input
          type="text"
          name="addTodo"
          value={todo}
          onChange={(e) => handleChange(e)}
        />
        <button type="submit" onClick={(e) => handleSubmit(e)}>
          Add
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
