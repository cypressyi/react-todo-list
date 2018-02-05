import React from 'react';

function TodoItem({ keyprop, todoText, onItemClick }) {
  const handleClick = () => {
    onItemClick(keyprop);
  };

  return (
    <li
      keyprop={keyprop}
      onClick={handleClick}
    >
      {todoText}
    </li>
  );
}

export default TodoItem;
