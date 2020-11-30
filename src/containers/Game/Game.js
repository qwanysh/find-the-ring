import React, { useEffect, useContext } from 'react';
import { countOpenedChests, getChestWithRing, openChest } from '../../utils';
import { MAX_ATTEMPTS, GameStatus } from '../../consts';
import { Context } from '../../store/contextProvider';
import { changeGameStatus, setChests } from '../../store/actions';
import ControlPanel from '../../components/ControlPanel/ControlPanel';
import ChestContainer from '../../components/ChestContainer/ChestContainer';

const Game = () => {
  const [state, dispatch] = useContext(Context);
  const { gameStatus, chests } = state;
  const openedChests = countOpenedChests(chests);

  const checkIsGameEnded = () => {
    if (getChestWithRing(chests).isOpen && gameStatus !== GameStatus.DEFEAT) {
      dispatch(changeGameStatus(GameStatus.VICTORY));
    } else if (openedChests === MAX_ATTEMPTS) {
      dispatch(changeGameStatus(GameStatus.DEFEAT));
    }
  };

  const showChestWithRing = () => {
    if (gameStatus === GameStatus.DEFEAT && !getChestWithRing(chests).isOpen) {
      const index = chests.indexOf(getChestWithRing(chests));
      dispatch(setChests(openChest(chests, index)));
    }
  };

  useEffect(checkIsGameEnded, [dispatch, chests, gameStatus, openedChests]);
  useEffect(showChestWithRing, [dispatch, chests, gameStatus]);

  return (
    <>
      <ChestContainer />
      <ControlPanel openedChests={openedChests} />
    </>
  );
};

export default Game;
