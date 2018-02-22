import React from 'react';
import { Row, Col } from 'antd';
import { SortableElement } from 'react-sortable-hoc';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { onItemUpdate, onItemRemove } from '../actions/action';

const TodoEditForm = SortableElement(({
  id,
  isCompleted,
  todoText,
  onItemUpdate,
  onItemRemove,
}) => {
  let titleField;

  const handleItemUpdate = () => {
    if (titleField.value.trim()) {
      onItemUpdate({
        id: id,
        title: titleField.value,
        isEditing: !isCompleted,
      });
    } else {
      onItemRemove({ id });
    }
  };

  return (
    <div className="todo-item">
      <Row gutter={8}>
        <Col span={20} offset={2}>
          <li className="todo-item__text" id={id}>
            <input
              type="text"
              placeholder="Leave blank to delete this todo!"
              className="todo-item__form"
              defaultValue={todoText}
              autoFocus
              ref={(el) => { titleField = el; }}
              onBlur={
                () => {
                  handleItemUpdate(titleField.value);
                }
              }
              onKeyPress={
                (e) => {
                  if (e.key === 'Enter') {
                    handleItemUpdate(titleField.value);
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


const mapDispatchToProps = (dispatch) => (
  bindActionCreators({ onItemUpdate, onItemRemove }, dispatch)
);

export default connect(null, mapDispatchToProps)(TodoEditForm);
