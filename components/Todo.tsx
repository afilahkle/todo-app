import React, { FC } from 'react';

interface todoProps {}

const Todo: FC<todoProps> = ({ todo }) => {
  return <div>{todo.content}</div>;
};

export default Todo;
