import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import Posts from './components/Posts'
import NoMatch from './components/NoMatch'
import PostView from './components/PostView'
import './App.css';

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/posts" component={Posts} />
    <Route exact path="/posts/:id" component={PostView} />
    
    <Route component={NoMatch} />
  </Switch>
)

export default App;
