import React from 'react';

function TodoAddForm({ placeholderText, inputText, onItemAdd }) {
  let titleField;

  const triggerAddItem = () => {
    if (titleField.value.trim()) {
      onItemAdd({
        id: +new Date(),
        title: titleField.value,
        isEditing: false,
      });
      titleField.value = '';
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder={placeholderText}
        ref={(el) => { titleField = el; }}
        value={inputText}
        onKeyPress={
          (e) => {
            if (e.key === 'Enter') {
              triggerAddItem();
            }
          }
        }
      />
      <button type="button" onClick={triggerAddItem}>Add</button>
    </div>
  );
}

export default TodoAddForm;

