import React from 'react';
import TodoList from './components/TodoList';
import TodoItem from './components/TodoItem';
import TodoAddForm from './components/TodoAddForm';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoItems: [],
    };
  }

  handleAddItem = (aItem) => {
    const newItems = [aItem, ...this.state.todoItems];

    this.setState({
      todoItems: newItems,
    });
  }

  handleRemoveItem = (key) => {
    const oldItems = this.state.todoItems;
    const newItems = oldItems.filter((item) => {
      return item.id !== key;
    });

    this.setState({
      todoItems: newItems,
    });
  }

  render() {
    return (
      <div>
        <TodoAddForm
          placeholderText="Todo..."
          onItemAdd={this.handleAddItem}
        />
        <TodoList>
          {
            this.state.todoItems.map((item) => {
              return (
                <TodoItem
                  key={item.id}
                  keyprop={item.id}
                  todoText={item.title}
                  onItemClick={this.handleRemoveItem}
                />
              );
            })
          }
        </TodoList>
      </div>
    );
  }
}

export default App;
