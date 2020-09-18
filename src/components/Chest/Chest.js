import React from 'react';
import './Chest.css';

const Chest = props => {
  const {isOpen, hasRing} = props.chest;
  const classes = ['Chest'];
  if (isOpen) {
    classes.push('Chest--open');
  }
  if (isOpen && hasRing) {
    classes.push('Chest--has-ring');
  }
  return <div className={classes.join(' ')} onClick={() => props.openChestHandler(props.index)}/>
};


export default Chest;