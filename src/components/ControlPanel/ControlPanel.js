import { MAX_ATTEMPTS, DANGER_ATTEMPTS, GameStatus } from '../../consts';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../store/contextProvider';
import { restartGame } from '../../store/actions';
import Button from '../UI/Button/Button';
import './ControlPanel.css';

const ControlPanel = ({ openedChests }) => {
  const [state, dispatch] = useContext(Context);
  const { gameStatus } = state;
  let attemptsMade = MAX_ATTEMPTS - openedChests;

  if (attemptsMade <= DANGER_ATTEMPTS) {
    attemptsMade = (
      <span className="ControlPanel__text--danger">{attemptsMade}</span>
    );
  }

  return (
    <div className="ControlPanel">
      <p className="ControlPanel__text">
        Attempts left: {attemptsMade}/{MAX_ATTEMPTS}
      </p>
      <Button
        disabled={openedChests === 0 && gameStatus === GameStatus.IN_PROGRESS}
        onClick={() => dispatch(restartGame())}
      >
        Restart
      </Button>
      <Link to="/">
        <Button>Go to Menu</Button>
      </Link>
    </div>
  );
};

export default ControlPanel;
