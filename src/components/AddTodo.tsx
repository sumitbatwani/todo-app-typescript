import React, { useRef } from 'react';
import '../App.css';

interface AddTodoType {
  addTodo: (a: string) => void;
}
const AddTodo: React.FC<AddTodoType> = (props) => {
  const refText = useRef<HTMLInputElement>(null);
  return (
    <div className='newTodoBox'>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const note = refText.current!.value;
          if (note) {
            props.addTodo(note);
            refText.current!.value = '';
          }
        }}
      >
        <input
          id='todo-input'
          className='inputBar'
          name='todo-input'
          placeholder='Write something!'
          ref={refText}
        />
        <div>
          <button className='submitButton'>ADD</button>
        </div>
      </form>
    </div>
  );
};

export default AddTodo;
