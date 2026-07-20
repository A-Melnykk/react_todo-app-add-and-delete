import React from 'react';

interface Props {
  todosLength: number;
  isAllCompleted: boolean;
  title: string;
  setTitle: (value: string) => void;
  onSubmit: (event: React.FormEvent) => void;
  isSubmitting: boolean;
  inputRef: React.RefObject<HTMLInputElement>;
}

export const Header: React.FC<Props> = ({
  todosLength,
  isAllCompleted,
  title,
  setTitle,
  onSubmit,
  isSubmitting,
  inputRef,
}) => {
  return (
    <header className="todoapp__header">
      {todosLength > 0 && (
        <button
          type="button"
          className={`todoapp__toggle-all ${isAllCompleted ? 'active' : ''}`}
          data-cy="ToggleAllButton"
        />
      )}

      <form onSubmit={onSubmit}>
        <input
          ref={inputRef}
          type="text"
          data-cy="NewTodoField"
          className="todoapp__new-todo"
          placeholder="What needs to be done?"
          value={title}
          onChange={e => setTitle(e.target.value)}
          disabled={isSubmitting}
        />
      </form>
    </header>
  );
};
