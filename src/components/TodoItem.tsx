import React from 'react';
import { Todo } from '../types/Todo';

interface Props {
  todo: Todo;
  onDelete?: (todoId: number) => void;
  isLoading?: boolean;
}

export const TodoItem: React.FC<Props> = ({
  todo,
  onDelete,
  isLoading = false,
}) => {
  return (
    <div className={`todo ${todo.completed ? 'completed' : ''}`} data-cy="Todo">
      <label className="todo__status-label" aria-label="Todo status">
        <input
          type="checkbox"
          data-cy="TodoStatus"
          className="todo__status"
          checked={todo.completed}
          readOnly
        />
      </label>
      <span data-cy="TodoTitle" className="todo__title">
        {todo.title}
      </span>
      <button
        type="button"
        className="todo__remove"
        data-cy="TodoDelete"
        onClick={() => onDelete?.(todo.id)}
      >
        ×
      </button>
      <div
        data-cy="TodoLoader"
        className={`modal overlay ${isLoading ? 'is-active' : ''}`}
      />
    </div>
  );
};
