// libs
import React, { useState } from 'react';
import { useFirestore } from 'react-redux-firebase';
import { useSelector } from 'react-redux';

const ToDoItem = ({ id, title, isDone }) => {
  const [isTodoItemDone, setTodoItemDone] = useState(isDone);
  const firestore = useFirestore();
  const { uid } = useSelector((state) => state.firebase.auth);

  const handleChange = (e) => {
    setTodoItemDone(e.target.checked);

    firestore.collection('users').doc(uid).collection('todos').doc(id).update({
      isDone: e.target.checked,
    });
  };
  return (
    <div
      style={{
        textDecoration: isTodoItemDone && 'line-through',
        opacity: isTodoItemDone ? 0.5 : 1,
      }}
    >
      <input
        id={`todo_${id}`}
        type="checkbox"
        onChange={handleChange}
        checked={isTodoItemDone}
      />
      <label htmlFor={`todo_${id}`}>{title}</label>
    </div>
  );
};
export default ToDoItem;
