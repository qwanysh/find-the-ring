import React from 'react';

const GameStatusCaption = props => {
  return (
      <div className='ChestContainer__caption'>
        <p className='ChestContainer__text'>{props.children}</p>
      </div>
  );
};

export default GameStatusCaption;