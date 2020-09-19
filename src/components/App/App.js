import React, {useState} from 'react';
import './App.css';
import {GameStatus, getChests, countOpenedChests} from '../../utils';
import ChestContainer from '../ChestContainer/ChestContainer';
import ControlPanel from '../ControlPanel/ControlPanel';

const App = () => {
  const AMOUNT = 36;
  const maxAttempts = AMOUNT / 2;
  const [gameStatus, setGameStatus] = useState(GameStatus.IN_PROGRESS);
  const [chests, setChests] = useState(getChests(AMOUNT));
  const openedChests = countOpenedChests(chests);

  const openChest = index => {
    if (gameStatus !== GameStatus.IN_PROGRESS) return;

    const chestsCopy = [...chests];
    chestsCopy[index].isOpen = true;
    setChests(chestsCopy);

    if (chestsCopy[index].hasRing) {
      setGameStatus(GameStatus.VICTORY);
    } else if (openedChests + 1 === maxAttempts) {
      setGameStatus(GameStatus.DEFEAT);
    }
  };

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
              maxAttempts={maxAttempts}
              restartGameHandler={restartGame}
          />
        </div>
      </div>
  );
}

export default App;
