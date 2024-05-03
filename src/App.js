import React from 'react';
import './App.css';
import Navbar from './Conponent/Navbar';
import Textform from './Conponent/Textform';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Navbar title='Tboy' abouttext='About us' />
        <Switch>
          <Route path='/'>
            <Textform heading='Write some text here : ' />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
