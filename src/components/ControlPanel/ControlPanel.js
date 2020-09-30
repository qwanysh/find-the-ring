import React from 'react';
import './ControlPanel.css';
import {GameStatus} from '../../utils';

const ControlPanel = props => {
  const DANGER_ATTEMPTS = 5;
  const {openedChests, maxAttempts, gameStatus} = props;
  let attemptsMade = maxAttempts - openedChests;

  if (attemptsMade <= DANGER_ATTEMPTS) {
    attemptsMade = <span className='ControlPanel__text--danger'>{attemptsMade}</span>;
  }

  return (
      <div className='ControlPanel'>
        <p className='ControlPanel__text'>Attempts left: {attemptsMade}/{maxAttempts}</p>
        <button
            className='ControlPanel__button'
            disabled={openedChests === 0 && gameStatus === GameStatus.IN_PROGRESS}
            onClick={props.restartGame}
        >Restart</button>
      </div>
  );
};

export default ControlPanel;