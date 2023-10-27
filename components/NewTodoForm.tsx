import React, { FC } from 'react';
import { newTodo } from '@utils/actions';

interface newTodoFormProps {}

const NewTodoForm: FC<newTodoFormProps> = ({}) => {
  return (
    <form action={newTodo}>
      <input
        name='content'
        type='text'
        className='border border-black/25'
      ></input>
      <button type='submit'>New Todo</button>
    </form>
  );
};

export default NewTodoForm;
