import React from 'react';
import Create from '../Create/Create';

const Edit = () => {
  const result = JSON.parse(localStorage.getItem('Issues'));
  return (
    <div>
      <Create title={result.title} desc={result.desc} />
    </div>
  );
};

export default Edit;
