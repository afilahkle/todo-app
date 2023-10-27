import React, { FC } from 'react';
import db from '@utils/db';
import TodoList from '@components/TodoList';

interface todosProps {}

async function getData() {
  // await new Promise((resolve) => setTimeout(() => resolve(), 2000)); // Test loadking page.
  // await new Promise((resolve, reject) => setTimeout(() => reject(), 3000)); // Test error page.
  const todos = await db.todo.findMany({});
  console.log(todos);
  return todos;
}

const TodosPage: FC<todosProps> = async ({}) => {
  const todos = await getData();
  return (
    <div>
      <TodoList todos={todos} />
    </div>
  );
};

export default TodosPage;
