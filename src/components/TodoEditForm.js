import React from 'react';
import { Row, Col } from 'antd';
import { SortableElement } from 'react-sortable-hoc';

const TodoEditForm = SortableElement(({ keyprop, todoText, onItemEmpty, onItemUpdate }) => {
  let titleField;
  return (
    <div className="todo-item">
      <Row gutter={8}>
        <Col span={20} offset={2}>
          <li className="todo-item__text" keyprop={keyprop}>
            <input
              type="text"
              placeholder="Leave blank to delete this todo"
              className="todo-item__form"
              defaultValue={todoText}
              autoFocus
              ref={(el) => { titleField = el; }}
              onChange={onItemEmpty}
              onBlur={
                () => {
                  onItemUpdate(titleField.value);
                }
              }
              onKeyPress={
                (e) => {
                  if (e.key === 'Enter') {
                    onItemUpdate(titleField.value);
                  }
                }
              }
            />
          </li>
        </Col>
      </Row>
    </div>
  );
});

export default TodoEditForm;
