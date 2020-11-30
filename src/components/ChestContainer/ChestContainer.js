import React, { useContext } from 'react';
import { GameStatus } from '../../consts';
import { Context } from '../../store/contextProvider';
import Chest from './Chest/Chest';
import GameStatusCaption from './GameStatusCaption/GameStatusCaption';
import './ChestContainer.css';

const ChestContainer = () => {
  const [state] = useContext(Context);
  const { gameStatus, chests } = state;

  const chestElements = chests.map((chest, index) => (
    <Chest key={index} chest={chest} index={index} />
  ));

  return (
    <div className="ChestContainer">
      {chestElements}
      {gameStatus !== GameStatus.IN_PROGRESS && <GameStatusCaption />}
    </div>
  );
};

export default ChestContainer;
