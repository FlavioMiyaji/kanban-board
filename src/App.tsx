import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import './App.css';
import KanbanBoard from './pages/KanbanBoardPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/board">
          <KanbanBoard />
        </Route>
        <Route path="/">
          <KanbanBoard />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
