// libs
import React from 'react';
import { Switch, Route } from 'react-router-dom';

// components
import TodoList from './components/todo/TodoList';
import PrivateRoute from './routes/PrivateRoute';
import SignIn from './components/auth/SignIn';

const App = () => {
  return (
    <div>
      <h1>Redufito</h1>
      <Switch>
        <PrivateRoute path="/todos">
          <TodoList />
        </PrivateRoute>
        <Route path="/">
          <SignIn />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
