import Reach from 'react';
import Todo from './Todo.js';

//Create a new component called TodoList.js. 
// This component takes the "todos" from App.js as a prop and 
// renders passes them to the Todo component as a title. 
// example - In the return, render a Todo component for each item in 
// your "todos" array.
const TodoList = ({ todos }) => {
  return (
    <ul>
      <Todo title={todos[0]} />
      <Todo title={todos[1]} />
      <Todo title={todos[2]} />
    </ul>
  );
};

export default TodoList;
