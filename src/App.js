import React from 'react';
import TodoList from './components/TodoList';
import TodoItem from './components/TodoItem';
import TodoAddForm from './components/TodoAddForm';
import TodoEditForm from './components/TodoEditForm';

let isFilteringOut = false;
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

  handleEditItemUpdate = (keyprop, title) => {
    if (title.trim()) {
      const newItems = [...this.state.todoItems];
      newItems.forEach((item) => {
        if (item.id === keyprop) {
          item.title = title;
          item.isEditing = !item.isEditing;
        }
      });

      this.setState({
        todoItems: newItems,
      });
    } else {
      this.handleRemoveItem(keyprop);
    }
  }

  handleItemComplete = (index) => {
    const newItems = [...this.state.todoItems];
    newItems[index].isCompleted = !newItems[index].isCompleted;
    this.setState({
      todoItems: newItems,
    });
  }

  handleItemFilter = () => {
    isFilteringOut = !isFilteringOut;

    const newItems = [...this.state.todoItems];

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
        <TodoList onItemFilter={this.handleItemFilter}>
          {
            this.state.todoItems.map((item, index) => {
              if (isFilteringOut && item.isCompleted) {
                return null;
              }
              return (
                (item.isEditing)
                ? <TodoEditForm
                  key={item.id}
                  keyprop={item.id}
                  todoText={item.title}
                  onItemUpdate={(title) => { this.handleEditItemUpdate(item.id, title); }}
                />
                : <TodoItem
                  key={item.id}
                  keyprop={item.id}
                  isCompleted={item.isCompleted}
                  todoText={item.title}
                  onItemComplete={() => { this.handleItemComplete(index); }}
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
