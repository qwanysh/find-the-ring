import {random} from 'lodash';

export class GameStatus {
  static IN_PROGRESS = 'in progress';
  static DEFEAT = 'defeat';
  static VICTORY = 'victory';
}

export const getChests = amount => {
  const chests = [];
  const index = random(0, amount);

  for (let i = 0; i < amount; i++) {
    chests.push(createChest(i === index));
  }

  return chests;
};

export const countOpenedChests = chests => {
  return chests.filter(chest => chest.isOpen).length;
};

export const getChestWithRing = chests => {
  return chests.find(chest => chest.hasRing);
};

const createChest = (hasRing = false) => {
  return {hasRing, isOpen: false};
};