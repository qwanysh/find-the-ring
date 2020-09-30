import React, {useEffect, useState} from 'react';
import './App.css';
import {countOpenedChests, GameStatus, createChests, getChestWithRing} from '../../utils';
import ControlPanel from '../../components/ControlPanel/ControlPanel';
import ChestContainer from '../../components/ChestContainer/ChestContainer';


const App = () => {
  const AMOUNT = 36;
  const MAX_ATTEMPTS = AMOUNT / 2;
  const [gameStatus, setGameStatus] = useState(GameStatus.IN_PROGRESS);
  const [chests, setChests] = useState(createChests(AMOUNT));
  const openedChests = countOpenedChests(chests);

  const openChestHandler = index => {
    if (gameStatus !== GameStatus.IN_PROGRESS || chests[index].isOpen) return;

    const chestsCopy = [...chests];
    chestsCopy[index].open();
    setChests(chestsCopy);
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
    if (!getChestWithRing(chests).isOpen && gameStatus === GameStatus.DEFEAT) {
      const chestsCopy = [...chests];
      getChestWithRing(chestsCopy).open();
      setChests(chestsCopy);
    }
  };

  useEffect(checkIsGameEnded);
  useEffect(showChestWithRing, [gameStatus]);

  return (
      <div className='App'>
        <div className='App__container'>
          <h1 className='App__heading'>Find the ring</h1>
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
        </div>
      </div>
  );
}

export default App;