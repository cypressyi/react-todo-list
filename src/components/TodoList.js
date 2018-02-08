import React from 'react';
import { Checkbox } from 'antd';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { SortableContainer } from 'react-sortable-hoc';
import { onItemFilterOut } from '../actions/action';

const TodoList = SortableContainer(({ onItemFilterOut, children }) => {
  return (
    <div>
      <div className="checkbox-block">
        <Checkbox
          type="checkbox"
          defaultChecked
          onClick={onItemFilterOut}
        />
        <span>顯示已完成項目</span>
      </div>
      <ul className="todo-list">{children}</ul>
    </div>
  );
});

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({ onItemFilterOut }, dispatch)
);

export default connect(null, mapDispatchToProps)(TodoList);

