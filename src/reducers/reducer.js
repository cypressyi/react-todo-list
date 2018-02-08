import { combineReducers } from 'redux';
import { arrayMove } from 'react-sortable-hoc';

function todoItems(state = [], action) {
  switch (action.type) {
    case 'ADD_ITEM':
    {
      return [{
        id: action.payload.id,
        title: action.payload.text,
        isEditing: false,
        isCompleted: false,
      }, ...state];
    }
    case 'REMOVE_ITEM':
    {
      const oldItems = [...state];
      const newItems = oldItems.filter((item) => {
        return item.id !== action.payload.id;
      });
      return newItems;
    }
    case 'EDIT_ITEM':
    {
      const newItems = [...state];
      newItems.forEach((item) => {
        if (item.id === action.payload.id) {
          item.isEditing = !item.isEditing;
        }
      });
      return newItems;
    }
    case 'EDIT_ITEM_UPDATE':
    {
      const newItems = [...state];
      newItems.forEach((item) => {
        if (item.id === action.payload.id) {
          item.title = action.payload.title;
          item.isEditing = !item.isEditing;
        }
      });
      return newItems;
    }
    case 'COMPLETE_ITEM':
    {
      const newItems = [...state];
      newItems.forEach((item) => {
        if (item.id === action.payload.id) {
          item.isCompleted = !item.isCompleted;
        }
      });
      return newItems;
    }
    case 'RESORT_ITEM':
    {
      const newItem = [...state];
      return arrayMove(newItem, action.payload.oldIndex, action.payload.newIndex);
    }
    default:
      return state;
  }
}

function filterOut(state = { isFilteringOut: false }, action) {
  switch (action.type) {
    case 'TOGGLE_FILTER':
    {
      return { isFilteringOut: !state.isFilteringOut };
    }
    default:
      return state;
  }
}

const todoApp = combineReducers({
  todoItems,
  filterOut,
});

export default todoApp;
