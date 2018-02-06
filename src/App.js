import React from 'react';
import TodoList from './components/TodoList';
import TodoItem from './components/TodoItem';
import TodoAddForm from './components/TodoAddForm';
import TodoEditForm from './components/TodoEditForm';

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

  handleRemoveItem = (keyprop) => {
    const oldItems = this.state.todoItems;
    const newItems = oldItems.filter((item) => {
      return item.id !== keyprop;
    });

    this.setState({
      todoItems: newItems,
    });
  }

  handleEditItem = (index) => {
    const newItems = [...this.state.todoItems];
    newItems[index].isEditing = !newItems[index].isEditing;

    this.setState({
      todoItems: newItems,
    });
  }

  handleEditItemUpdate = (index, title) => {
    if (title.trim()) {
      const newItems = [...this.state.todoItems];

      newItems[index].title = title;
      newItems[index].isEditing = !newItems[index].isEditing;

      this.setState({
        todoItems: newItems,
      });
    } else {
      const newItems = [...this.state.todoItems];
      newItems[index].isEditing = !newItems[index].isEditing;

      this.setState({
        todoItems: newItems,
      });
    }
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
            this.state.todoItems.map((item, index) => {
              return (
                (item.isEditing)
                ? <TodoEditForm
                  key={item.id}
                  todoText={item.title}
                  onItemUpdate={(title) => { this.handleEditItemUpdate(index, title); }}
                />
                : <TodoItem
                  key={item.id}
                  keyprop={item.id}
                  todoText={item.title}
                  onItemEdit={() => { this.handleEditItem(index); }}
                  onItemRemove={() => { this.handleRemoveItem(item.id); }}
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
