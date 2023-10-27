import React, { FC } from 'react';

interface newTodoFormProps {}

const NewTodoForm: FC<newTodoFormProps> = ({}) => {
  return (
    <form>
      <input type='text' className='border border-black/25'></input>
    </form>
  );
};

export default NewTodoForm;
