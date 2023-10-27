import React, { FC } from 'react';
import Todo from './Todo';

interface todoListProps {}

const TodoList: FC<todoListProps> = ({ todos }) => {
  return (
    <div>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
