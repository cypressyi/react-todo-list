import React from 'react';
import { Checkbox } from 'antd';

function TodoList({ onItemFilter, children }) {
  return (
    <div>
      <div className="checkbox-block">
        <Checkbox
          type="checkbox"
          defaultChecked
          onClick={onItemFilter}
        />
        <span>顯示已完成項目</span>
      </div>
      <ul className="todo-list">{children}</ul>
    </div>
  );
}

export default TodoList;
