import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import ListAll from './routes/listAll';
import About from './routes/about';
import Detail from './routes/detail';

const App = () => (
    <Switch>
      <Route exact path="/" component={ListAll} />
      <Route path="/about" component={About} />
      <Route path="/:id" component={Detail} />
    </Switch>
);

export default App;
