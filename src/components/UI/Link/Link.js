import React, {Fragment} from 'react';

const Link = props => {
  const onClick = () => {
    console.log('test');
  }

  return (
      <Fragment onClick={onClick}>
        {props.children}
      </Fragment>
  );
};

export default Link;