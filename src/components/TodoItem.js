import React from 'react';
import { Row, Col, Checkbox, Button } from 'antd';
import { SortableElement } from 'react-sortable-hoc';

const TodoItem = SortableElement(({
  keyprop,
  isCompleted,
  todoText,
  onItemComplete,
  onItemEdit,
  onItemRemove,
}) => {
  return (
    <div className={
      isCompleted
      ? 'todo-item animated fadeIn'
      : 'todo-item animated fadeIn'
    }>
      <Row gutter={8}>
        <Col span={2}>
          <Checkbox
            type="checkbox"
            defaultChecked={isCompleted}
            onClick={onItemComplete}
          />
        </Col>
        <li 
          className="todo-list__item"
          keyprop={keyprop}
          onDoubleClick={onItemEdit}
        >
          <Col xs={16} md={18}>
            {todoText}
          </Col>
        </li>
        <Col xs={6} md={4}>
          <Button
            type="button"
            size="small"
            onClick={
              () => { onItemRemove(); }
            }
          >
            Remove
          </Button>
        </Col>
      </Row>
    </div>
  );
});

export default TodoItem;
