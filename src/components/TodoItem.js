import React from 'react';

function TodoItem(props) {
  const handleClick = () => {
    props.onItemClick(props.index);
  };

  return (
    <li onClick={handleClick} >{props.todoText}</li>
  );
}

export default TodoItem;
