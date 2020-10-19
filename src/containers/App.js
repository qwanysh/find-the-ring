import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Redirect, Route, Switch} from 'react-router';
import Game from './Game/Game';
import Menu from '../components/Menu/Menu';
import './App.css';

const App = () => {
  return (
      <div className='App'>
        <div className='App__container'>
          <h1 className='App__heading'>Find the ring</h1>
          <BrowserRouter basename='/find-the-ring/'>
            <Switch>
              <Route path='/game' component={Game}/>
              <Route path='/' exact component={Menu}/>
              <Route path='/' render={() => (
                  <Redirect to='/'/>
              )}/>
            </Switch>
          </BrowserRouter>
        </div>
      </div>
  );
};

export default App;