import React from 'react';
import './ControlPanel.css';
import {GameStatus} from '../../utils';

const ControlPanel = props => {
  const {openedChests, maxAttempts, gameStatus} = props;
  const attemptsMade = maxAttempts - openedChests;

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