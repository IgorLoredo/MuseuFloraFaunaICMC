import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Home from './pages/Home'
import {HashRouter,BrowserRouter, Route,Switch} from 'react-router-dom'
import Flora from  './pages/Flora'
import Fauna from './pages/Fauna'
import Historia from './pages/Historia'

ReactDOM.render(
  <BrowserRouter>
   <Route>
     <HashRouter path = '/' component = {Home}/>
    <Switch>
      <Route exact path = '/' component = {Home} />
      <Route path = '/Flora' component = {Flora}/>
      <Route path = '/Fauna' component = {Fauna}/>
      <Route path = '/Historia' component = {Historia}/>

    </Switch>    
  </Route>
  </BrowserRouter>,
 

  document.getElementById('root')
);

serviceWorker.unregister();
