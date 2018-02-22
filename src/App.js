import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { onItemSort } from './actions/action';
import 'animate.css';
import TodoList from './components/TodoList';
import TodoItem from './components/TodoItem';
import TodoAddForm from './components/TodoAddForm';
import TodoEditForm from './components/TodoEditForm';
import './App.css';

class App extends React.Component {
  render() {
    const { todoItems, filterOut } = this.props;
    return (
      <div className="container">
        <div className="wrapper">
          <TodoAddForm
            placeholderText="What need to be done...?"
          />
          <TodoList
            pressDelay={200}
            onSortEnd={(e) => { 
              const { oldIndex, newIndex } = e;
              this.props.onItemSort({ oldIndex, newIndex }) 
            }}
          >
            {
              todoItems.map((item, index) => {
                if (filterOut.isFilteringOut && item.isCompleted) {
                  return null;
                }
                return (
                  (item.isEditing)
                  ? <TodoEditForm
                    key={item.id}
                    index={index}
                    id={item.id}
                    todoText={item.title}
                  />
                  : <TodoItem
                    key={item.id}
                    index={index}
                    id={item.id}
                    isCompleted={item.isCompleted}
                    todoText={item.title}
                  />
                );
              })
            }
          </TodoList>
        </div>
      </div>
    );
  }
}

const mapStateToProps = store => (
  { 
    todoItems: store.todoItems,
    filterOut: store.filterOut
  }
)

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({ onItemSort }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(App);
