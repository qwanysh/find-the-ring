import React, {useState} from 'react';
import './App.css';
import {countOpenedChests, GameStatus, getChests} from '../../utils';
import ChestContainer from '../ChestContainer/ChestContainer';
import ControlPanel from '../ControlPanel/ControlPanel';

const App = () => {
  const AMOUNT = 36;
  const MAX_ATTEMPTS = AMOUNT / 2;
  const [gameStatus, setGameStatus] = useState(GameStatus.IN_PROGRESS);
  const [chests, setChests] = useState(getChests(AMOUNT));
  const openedChests = countOpenedChests(chests);

  const openChest = index => {
    if (gameStatus !== GameStatus.IN_PROGRESS || chests[index].isOpen) return;

    const chestsCopy = [...chests];
    const targetChest = chestsCopy[index];
    targetChest.isOpen = true;
    setChests(chestsCopy);

    checkIsGameEnded(targetChest);
  };

  const checkIsGameEnded = chest => {
    if (chest.hasRing && gameStatus !== GameStatus.DEFEAT) {
      setGameStatus(GameStatus.VICTORY);
    } else if (openedChests + 1 === MAX_ATTEMPTS) {
      setGameStatus(GameStatus.DEFEAT);
    }
  }

  const restartGame = () => {
    setGameStatus(GameStatus.IN_PROGRESS);
    setChests(getChests(AMOUNT));
  };

  return (
      <div className='App'>
        <div className='App__container'>
          <h1 className='App__heading'>Find the ring</h1>
          <ChestContainer
              chests={chests}
              openChestHandler={openChest}
              gameStatus={gameStatus}
          />
          <ControlPanel
              openedChests={openedChests}
              maxAttempts={MAX_ATTEMPTS}
              restartGameHandler={restartGame}
          />
        </div>
      </div>
  );
}

export default App;
