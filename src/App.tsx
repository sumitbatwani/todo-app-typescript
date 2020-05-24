import React, { useState } from 'react';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import './App.css';

type Todo = {
  id: string;
  text: string;
};
const App: React.FC = () => {
  const [todoList, setTodoList] = useState<Todo[]>([]);

  const addTodoFunc = (text: string) => {
    setTodoList((prevList) => [
      ...prevList,
      {
        id: Math.random().toString(),
        text: text
      }
    ]);
  };

  const deleteNote = (id: string) => {
    setTodoList((prevList) => prevList.filter((el) => el.id !== id));
  };

  return (
    <div className='App'>
      <AddTodo addTodo={addTodoFunc} />
      <TodoList item={todoList} deleteNote={deleteNote} />
    </div>
  );
};

export default App;
