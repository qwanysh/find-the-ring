import React, {useEffect, useState} from 'react';
import './App.css';
import {countOpenedChests, GameStatus, getChests, getChestWithRing} from '../../utils';
import ControlPanel from '../../components/ControlPanel/ControlPanel';
import ChestContainer from '../../components/ChestContainer/ChestContainer';


const App = () => {
  const AMOUNT = 36;
  const MAX_ATTEMPTS = AMOUNT / 2;
  const [gameStatus, setGameStatus] = useState(GameStatus.IN_PROGRESS);
  const [chests, setChests] = useState(getChests(AMOUNT));
  const openedChests = countOpenedChests(chests);

  const openChestHandler = index => {
    if (gameStatus !== GameStatus.IN_PROGRESS || chests[index].isOpen) return;

    const chestsCopy = [...chests];
    const targetChest = chestsCopy[index];
    targetChest.isOpen = true;
    setChests(chestsCopy);
  };

  const restartGameHandler = () => {
    setGameStatus(GameStatus.IN_PROGRESS);
    setChests(getChests(AMOUNT));
  };

  useEffect(() => {
    const chestWithRing = getChestWithRing(chests);
    if (chestWithRing.isOpen) {
      setGameStatus(GameStatus.VICTORY);
    } else if (openedChests === MAX_ATTEMPTS) {
      setGameStatus(GameStatus.DEFEAT);
    }
  }, [chests, openedChests, MAX_ATTEMPTS]);

  return (
      <div className='App'>
        <div className='App__container'>
          <h1 className='App__heading'>Find the ring</h1>
          <ChestContainer
              chests={chests}
              openChest={openChestHandler}
              gameStatus={gameStatus}
          />
          <ControlPanel
              openedChests={openedChests}
              maxAttempts={MAX_ATTEMPTS}
              restartGame={restartGameHandler}
          />
        </div>
      </div>
  );
}

export default App;
