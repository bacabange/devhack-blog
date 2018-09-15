import React from 'react';

const Form = props => {
  return (
    <div>
      <form {...props}>{props.children}</form>
    </div>
  );
};

export default Form;
