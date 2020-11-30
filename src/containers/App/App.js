import React, { useReducer } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Redirect, Route, Switch } from 'react-router';
import ContextProvider from '../../store/contextProvider';
import { createChests } from '../../utils';
import { AMOUNT, GameStatus } from '../../consts';
import reducer from '../../store/reducer';
import Game from '../Game/Game';
import Menu from '../../components/Menu/Menu';
import './App.css';

const App = () => {
  const [state, dispatch] = useReducer(reducer, {
    gameStatus: GameStatus.IN_PROGRESS,
    chests: createChests(AMOUNT),
  });

  return (
    <ContextProvider state={state} dispatch={dispatch}>
      <BrowserRouter basename="/find-the-ring/">
        <div className="App">
          <div className="App__container">
            <h1 className="App__heading">Find the ring</h1>
            <Switch>
              <Route path="/game" exact>
                <Game />
              </Route>
              <Route path="/" exact>
                <Menu />
              </Route>
              <Route path="/">
                <Redirect to="/" />
              </Route>
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </ContextProvider>
  );
};

export default App;
