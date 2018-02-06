import React from 'react';

function TodoEditForm({ todoText, onItemUpdate }) {
  let titleField;

  return (
    <li>
      <input
        type="text"
        defaultValue={todoText}
        autoFocus
        ref={(el) => { titleField = el; }}
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
