import React, {useState} from 'react';
import './App.css';
import {getChests, countOpenedChests} from '../../utils';
import ChestContainer from '../ChestContainer/ChestContainer';
import ControlPanel from '../ControlPanel/ControlPanel';

const App = () => {
  const AMOUNT = 36;
  const [chests, setChests] = useState(getChests(AMOUNT));
  const openedChests = countOpenedChests(chests);

  const openChest = index => {
    const chestsCopy = [...chests];
    chestsCopy[index].isOpen = true;
    setChests(chestsCopy);
  };

  return (
      <div className='App'>
        <div className='container'>
          <ChestContainer chests={chests} openChestHandler={openChest}/>
          <ControlPanel openedChests={openedChests} totalChests={AMOUNT}/>
        </div>
      </div>
  );
}

export default App;
