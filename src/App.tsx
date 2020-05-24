import React, { useState } from 'react';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import './App.css';

const App: React.FC = () => {
  const [todoList, setTodoList] = useState<{ id: string; text: string }[]>([
    { id: Math.random().toString(), text: '' }
  ]);

  const addTodoFunc = (text: string) => {
    setTodoList((prevList) => [
      ...prevList,
      {
        id: Math.random().toString(),
        text: text
      }
    ]);
  };

  return (
    <div className='App'>
      <AddTodo addTodo={addTodoFunc} />
      <TodoList item={todoList} />
    </div>
  );
};

export default App;
