import React from 'react';
import './GameStatusCaption.css';

const GameStatusCaption = props => {
  return (
      <div className='GameStatusCaption'>
        <p className='GameStatusCaption__text'>{props.children}</p>
      </div>
  );
};

export default GameStatusCaption;