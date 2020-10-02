import {random, range} from 'lodash';

export class GameStatus {
  static IN_PROGRESS = 'in progress';
  static DEFEAT = 'defeat';
  static VICTORY = 'victory';
}

export const createChests = amount => {
  const index = random(0, amount - 1);
  return range(amount).map(i => createChest(i === index));
};

export const countOpenedChests = chests => {
  return chests.filter(chest => chest.isOpen && !chest.hasRing).length;
};

export const getChestWithRing = chests => {
  return chests.find(chest => chest.hasRing);
};

export const openChest = (chests, index) => {
  const chestsCopy = [...chests];
  chestsCopy[index] = chestsCopy[index].open();
  return chestsCopy;
};

const createChest = (hasRing = false) => {
  return {
    hasRing,
    isOpen: false,
    open() {
      return {...this, isOpen: true};
    },
  };
};