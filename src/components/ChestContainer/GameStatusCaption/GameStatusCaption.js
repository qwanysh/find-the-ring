import React from 'react';
import './GameStatusCaption.css';

const GameStatusCaption = ({ children }) => {
  return (
    <div className="GameStatusCaption">
      <p className="GameStatusCaption__text">{children}</p>
    </div>
  );
};

export default GameStatusCaption;
