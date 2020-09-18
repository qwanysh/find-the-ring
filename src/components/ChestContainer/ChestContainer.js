import React from 'react';
import './ChestContainer.css';
import Chest from '../Chest/Chest';

const ChestContainer = props => {
  const chestElements = props.chests.map((chest, index) => {
    return <Chest key={index} chest={chest} index={index} openChestHandler={props.openChestHandler}/>;
  });

  return (
      <div className='ChestContainer'>
        {chestElements}
      </div>
  );
};

export default ChestContainer;