import React from 'react';
import '../App.css';

type TodoListType = {
  item: { id: string; text: string }[];
  deleteNote: (id: string) => void;
};
const TodoList: React.FC<TodoListType> = (props) => {
  return (
    <div className='listItem'>
      Notes that you wrote!
      <ul>
        {props.item.map((el) => (
          <li key={el.id}>
            {el.text}
            <button
              className='deleteNote'
              onClick={props.deleteNote.bind(null, el.id)}
            >
              DELETE
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
