import React, { FC } from 'react';
import db from '@utils/db';
import TodoList from '@components/TodoList';

interface todosProps {}

async function getData() {
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
