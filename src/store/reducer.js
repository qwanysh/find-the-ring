import {
  CHANGE_GAME_STATUS,
  SET_CHESTS,
  OPEN_CHEST,
  RESTART_GAME,
} from './actionTypes';
import { AMOUNT, GameStatus } from '../consts';
import { createChests, openChest } from '../utils';

const reducer = (state, { type, payload }) => {
  switch (type) {
    case CHANGE_GAME_STATUS:
      return { ...state, gameStatus: payload };

    case SET_CHESTS:
      return { ...state, chests: payload };

    case OPEN_CHEST:
      if (
        state.gameStatus === GameStatus.IN_PROGRESS &&
        !state.chests[payload].isOpen
      ) {
        return { ...state, chests: openChest(state.chests, payload) };
      }
      return state;

    case RESTART_GAME:
      return {
        ...state,
        chests: createChests(AMOUNT),
        gameStatus: GameStatus.IN_PROGRESS,
      };

    default:
      return state;
  }
};

export default reducer;
