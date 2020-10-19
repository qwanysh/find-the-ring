import React from 'react';
import './ControlPanel.css';
import {GameStatus} from '../../utils';
import Button from '../UI/Button/Button';
import {Link} from 'react-router-dom';

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
        <Button
            disabled={openedChests === 0 && gameStatus === GameStatus.IN_PROGRESS}
            onClick={props.restartGame}
        >Restart</Button>
        <Link to='/'>
          <Button>Go to Menu</Button>
        </Link>
      </div>
  );
};

export default ControlPanel;