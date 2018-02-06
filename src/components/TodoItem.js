import React from 'react';

function TodoItem({ keyprop, todoText, onItemEdit, onItemRemove }) {
  return (
    <li
      keyprop={keyprop}
      onDoubleClick={onItemEdit}
    >
      {todoText}
      <button
        type="button"
        onClick={
          () => { onItemRemove(); }
        }
      >
        Remove
      </button>
    </li>
  );
}

export default TodoItem;
