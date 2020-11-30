import {
  CHANGE_GAME_STATUS,
  SET_CHESTS,
  OPEN_CHEST,
  RESTART_GAME,
} from './actionTypes';

export const changeGameStatus = (gameStatus) => ({
  type: CHANGE_GAME_STATUS,
  payload: gameStatus,
});

export const setChests = (chests) => ({
  type: SET_CHESTS,
  payload: chests,
});

export const openChest = (index) => ({ type: OPEN_CHEST, payload: index });

export const restartGame = () => ({ type: RESTART_GAME });
