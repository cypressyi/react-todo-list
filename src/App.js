import React from 'react';
import TodoList from './components/TodoList';
import TodoItem from './components/TodoItem';
import TodoAddForm from './components/TodoAddForm';
import TodoEditForm from './components/TodoEditForm';
import './App.css';

let isFilteringOut = false;
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoItems: [],
      inputText: '',
    };
  }

  handleInputChange = (inputText) => {
    this.setState({
      inputText: inputText,
    });
  }

  handleAddItem = (aItem) => {
    const newItems = [aItem, ...this.state.todoItems];

    this.setState({
      todoItems: newItems,
      inputText: '',
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
      <div className="container">
        <div className="wrapper">
          <TodoAddForm
            placeholderText="What need to be done."
            inputText={this.state.inputText}
            onItemAdd={this.handleAddItem}
            onInputChange={this.handleInputChange}
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
                    defaultValue=""
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
      </div>
    );
  }
}

export default App;
