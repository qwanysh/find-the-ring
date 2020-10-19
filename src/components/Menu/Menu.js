import React from 'react';
import Button from '../UI/Button/Button';
import {Link} from 'react-router-dom';
import './Menu.css';

const Menu = () => {
  return (
      <>
        <div className='Menu__ring'/>
        <Link to='/game'>
          <Button>Start Game</Button>
        </Link>
      </>
  );
};

export default Menu;