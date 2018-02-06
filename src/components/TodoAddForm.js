import React from 'react';
import { Input, Button, Row, Col } from 'antd';

function TodoAddForm({ placeholderText, inputText, onInputChange, onItemAdd }) {
  const triggerAddItem = () => {
    if (inputText.trim()) {
      onItemAdd({
        id: +new Date(),
        title: inputText,
        isEditing: false,
        isCompleted: false,
      });
    }
  };
  return (
    <div>
      <Row>
        <Col span={20}>
          <Input
            type="text"
            placeholder={placeholderText}
            onChange={(e) => { onInputChange(e.target.value); }}
            value={inputText}
            onKeyPress={
              (e) => {
                if (e.key === 'Enter') {
                  triggerAddItem();
                }
              }
            }
          />
        </Col>
        <Col span={4}>
          <Button type="button" onClick={triggerAddItem}>Add</Button>
        </Col>
      </Row>
    </div>
  );
}

export default TodoAddForm;

