import React, { useContext } from 'react';
import { GameStatus } from '../../../consts';
import { Context } from '../../../store/contextProvider';
import './GameStatusCaption.css';

const GameStatusCaption = () => {
  const [state] = useContext(Context);
  const { gameStatus } = state;

  let text;
  if (gameStatus === GameStatus.DEFEAT) {
    text = 'You lose!';
  } else if (gameStatus === GameStatus.VICTORY) {
    text = 'You found it!';
  }

  return (
    <div className="GameStatusCaption">
      <p className="GameStatusCaption__text">{text}</p>
    </div>
  );
};

export default GameStatusCaption;
