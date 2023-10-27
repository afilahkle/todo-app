import NewTodoForm from '@components/NewTodoForm';
import React, { FC } from 'react';

interface layoutProps {}

const DashboardLayout: FC<layoutProps> = ({ children }) => {
  return (
    <div>
      <h1>dashboard</h1>
      <div>
        <NewTodoForm />
      </div>
      <div>{children}</div>
    </div>
  );
};

export default DashboardLayout;
