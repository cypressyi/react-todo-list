import React from 'react';

function TodoList({ onItemFilter, children }) {
  return (
    <div>
      <input
        type="checkbox"
        defaultChecked
        onClick={onItemFilter}
      />
      顯示已完成項目
      <ul>{children}</ul>
    </div>
  );
}

export default TodoList;
