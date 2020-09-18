import React from 'react';
import './ControlPanel.css';

const ControlPanel = props => {
  const {openedChests, maxAttempts} = props;
  const attemptsMade = maxAttempts - openedChests;

  return (
      <div className='ControlPanel'>
        <p className='ControlPanel__text'>Attempts left: {attemptsMade}/{maxAttempts}</p>
        <button
            className='ControlPanel__button'
            disabled={openedChests === 0}
            onClick={props.restartGameHandler}
        >Restart</button>
      </div>
  );
};

export default ControlPanel;