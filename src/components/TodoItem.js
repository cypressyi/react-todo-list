import React from 'react';
import { Row, Col, Checkbox, Button } from 'antd';
import { SortableElement } from 'react-sortable-hoc';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { onItemRemove, onItemEdit, onItemComplete } from '../actions/action';

const TodoItem = SortableElement(({
  id,
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
            onClick={() => {
              onItemComplete({
                id,
              });
            }}
          />
        </Col>
        <li
          className="todo-item__text"
          id={id}
          onDoubleClick={() => {
            onItemEdit({
              id,
            });
          }}
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
              () => { onItemRemove({ id }); }
            }
          >
            Remove
          </Button>
        </Col>
      </Row>
    </div>
  );
});

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({ onItemRemove, onItemEdit, onItemComplete }, dispatch)
);

export default connect(null, mapDispatchToProps)(TodoItem);
