import React, { useEffect, useState } from 'react';
import {
  countOpenedChests,
  createChests,
  GameStatus,
  getChestWithRing,
  openChest,
} from '../../utils';
import ControlPanel from '../../components/ControlPanel/ControlPanel';
import ChestContainer from '../../components/ChestContainer/ChestContainer';

const Game = () => {
  const AMOUNT = 36;
  const MAX_ATTEMPTS = AMOUNT / 2;
  const [gameStatus, setGameStatus] = useState(GameStatus.IN_PROGRESS);
  const [chests, setChests] = useState(createChests(AMOUNT));
  const openedChests = countOpenedChests(chests);

  const openChestHandler = (index) => {
    if (gameStatus === GameStatus.IN_PROGRESS && !chests[index].isOpen) {
      setChests(openChest(chests, index));
    }
  };

  const restartGameHandler = () => {
    setGameStatus(GameStatus.IN_PROGRESS);
    setChests(createChests(AMOUNT));
  };

  const checkIsGameEnded = () => {
    if (getChestWithRing(chests).isOpen && gameStatus !== GameStatus.DEFEAT) {
      setGameStatus(GameStatus.VICTORY);
    } else if (openedChests === MAX_ATTEMPTS) {
      setGameStatus(GameStatus.DEFEAT);
    }
  };

  const showChestWithRing = () => {
    if (gameStatus === GameStatus.DEFEAT && !getChestWithRing(chests).isOpen) {
      const index = chests.indexOf(getChestWithRing(chests));
      setChests(openChest(chests, index));
    }
  };

  useEffect(checkIsGameEnded);
  useEffect(showChestWithRing, [gameStatus]);

  return (
    <>
      <ChestContainer
        chests={chests}
        gameStatus={gameStatus}
        openChest={openChestHandler}
      />
      <ControlPanel
        openedChests={openedChests}
        gameStatus={gameStatus}
        maxAttempts={MAX_ATTEMPTS}
        restartGame={restartGameHandler}
      />
    </>
  );
};

export default Game;
