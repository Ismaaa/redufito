// libs
import React from 'react';
import { useSelector } from 'react-redux';
import { useFirestoreConnect } from 'react-redux-firebase';

// components
import AddTodo from './AddTodo';
import ToDoItem from './TodoItem';

const Todos = () => {
  const { displayName, uid } = useSelector((state) => state.firebase.auth);

  useFirestoreConnect({
    collection: `users/${uid}/todos`,
    storeAs: 'todos', // mount as => state.firestore.data.{value}
  });

  const todos = useSelector((state) => state.firestore.data.todos);

  return (
    <div>
      <h3>Hello {displayName}</h3>
      <h4>Todos</h4>
      <AddTodo />
      <ul
        style={{
          listStyleType: 'none',
        }}
      >
        {todos &&
          //                    [Object key, values]
          Object.entries(todos).map(([id, todo]) => (
            <li key={id}>
              <ToDoItem id={id} title={todo.title} isDone={todo.isDone} />
            </li>
          ))}
      </ul>
    </div>
  );
};
export default Todos;
