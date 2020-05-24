import React from 'react';

type TodoListType = {
  item: { id: string; text: string }[];
};
const TodoList: React.FC<TodoListType> = (props) => {
  return (
    <ul>
      {props.item.map((el) => (
        <li key={el.id}>{el.text}</li>
      ))}
    </ul>
  );
};

export default TodoList;
