import React, { FC } from 'react';

interface docsIdProps {}

const DocsIdPage: FC<docsIdProps> = ({ params }) => {
  return <div>here {params.id}</div>;
};

export default DocsIdPage;
