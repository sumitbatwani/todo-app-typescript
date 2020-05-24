import React, { useRef } from 'react';

interface AddTodoType {
  addTodo: (a: string) => void;
}
const AddTodo: React.FC<AddTodoType> = (props) => {
  const refText = useRef<HTMLInputElement>(null);
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          props.addTodo(refText.current!.value);
        }}
      >
        <input
          id='todo-input'
          name='todo-input'
          placeholder='enter text'
          ref={refText}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default AddTodo;
