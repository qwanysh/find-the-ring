import React from 'react';
import './ControlPanel.css';

const ControlPanel = props => {
  return (
      <div className='ControlPanel'>
        <p className='ControlPanel__text'>Chests opened: {props.openedChests}/{props.totalChests}</p>
        <button className='ControlPanel__button' disabled={props.openedChests === 0}>Restart</button>
      </div>
  );
};

export default ControlPanel;