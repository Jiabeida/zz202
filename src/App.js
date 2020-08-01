import React from 'react';
import './App.css';
import Local from './components/Local';
import Get from './components/Get'
import {  Button } from 'antd';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
            <Button>
            <Link to='/'>主页</Link>
            </Button>
              <Button>
                <Link to='/Get'>管理</Link>
              </Button>
              <Switch>
              <Route path='/Get'>
                <Get/>
              </Route>
                  <Route path='/'>
                <Local/>
              </Route>
            </Switch>
            </Router>
    </div>
  );
}

export default App;
