import React from 'react';
import TodoItem from './TodoItem';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: '',
      todoItems: [],
    };
  }

  handleInputChange = (e) => {
    this.setState({
      inputText: e.target.value,
    });
  }

  handleAddItem = (e) => {
    e.preventDefault();
    const { inputText } = this.state;
    const newItems = [inputText, ...this.state.todoItems];

    this.setState({
      todoItems: newItems,
      inputText: '',
    });
  }

  handleRemoveItem = (index) => {
    const oldItems = this.state.todoItems;
    const newItems = oldItems.slice(0, index).concat(oldItems.slice(index + 1));

    this.setState({
      todoItems: newItems,
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleAddItem}>
          <input
            type="inputText"
            placeholder="Todo..."
            value={this.state.inputText}
            onChange={this.handleInputChange}
          />
          <button type="submit">Add Item</button>
        </form>
        <ul>
          {
            this.state.todoItems.map((value, index) => {
              return <TodoItem key={index} todoText={value} index={index} onItemClick={this.handleRemoveItem} />;
            })
          }
        </ul>
      </div>
    );
  }
}

export default TodoList;
