import React from 'react';
import { Row, Col } from 'antd';

function TodoEditForm({ keyprop, todoText, onItemEmpty, onItemUpdate }) {
  let titleField;

  return (
    <Row gutter={8}>
      <Col span={22} offset={2}>
        <li keyprop={keyprop}>
          <input
            type="text"
            placeholder="Leave blank to delete this todo"
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
  );
}

export default TodoEditForm;
