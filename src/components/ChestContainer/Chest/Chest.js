import React, { useContext } from 'react';
import { openChest } from '../../../store/actions';
import { Context } from '../../../store/contextProvider';
import './Chest.css';

const Chest = ({ chest, index }) => {
  const [, dispatch] = useContext(Context);

  const classes = ['Chest'];
  if (chest.isOpen) {
    classes.push('Chest--open');
    if (chest.hasRing) {
      classes.push('Chest--has-ring');
    }
  }

  return (
    <div
      className={classes.join(' ')}
      onClick={() => dispatch(openChest(index))}
    />
  );
};

export default Chest;
