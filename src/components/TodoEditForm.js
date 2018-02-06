import React from 'react';

function TodoEditForm({ keyprop, todoText, onItemEmpty, onItemUpdate }) {
  let titleField;

  return (
    <li keyprop={keyprop}>
      <input
        type="text"
        placeholder="Leave blank to delete this todo"
        defaultValue={todoText}
        autoFocus
        ref={(el) => { titleField = el; }}
        onChange={onItemEmpty}
        onBlur={
          () => {
            onItemUpdate(titleField.value);
          }
        }
        onKeyPress={
          (e) => {
            if (e.key === 'Enter') {
              onItemUpdate(titleField.value);
            }
          }
        }
      />
    </li>
  );
}

export default TodoEditForm;
