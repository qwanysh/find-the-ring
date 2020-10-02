import React from 'react';
import './ChestContainer.css';
import Chest from './Chest/Chest';
import {GameStatus} from '../../utils';
import GameStatusCaption from './GameStatusCaption/GameStatusCaption';

const ChestContainer = props => {
  const chestElements = props.chests.map((chest, index) => (
      <Chest
          key={index}
          chest={chest}
          index={index}
          openChest={props.openChest}
      />
  ));

  let gameEndText = null;

  if (props.gameStatus === GameStatus.DEFEAT) {
    gameEndText = 'You lose!';
  } else if (props.gameStatus === GameStatus.VICTORY) {
    gameEndText = 'You found it!';
  }

  return (
      <div className='ChestContainer'>
        {chestElements}
        {gameEndText ? <GameStatusCaption>{gameEndText}</GameStatusCaption> : null}
      </div>
  );
};

export default ChestContainer;