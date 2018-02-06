import React from 'react';

function TodoItem({ keyprop, isCompleted, todoText, onItemComplete, onItemEdit, onItemRemove }) {
  return (
    <li
      keyprop={keyprop}
      onDoubleClick={onItemEdit}
    >
      <input
        type="checkbox"
        defaultChecked={isCompleted}
        onClick={onItemComplete}
      />
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
