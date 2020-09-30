import {random} from 'lodash';

export class GameStatus {
  static IN_PROGRESS = 'in progress';
  static DEFEAT = 'defeat';
  static VICTORY = 'victory';
}

export const createChests = amount => {
  const chests = [];
  const index = random(0, amount - 1);

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
  return {
    hasRing,
    isOpen: false,
    open() {
      this.isOpen = true;
    },
  };
};