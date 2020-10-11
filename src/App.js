/* Importing libraries */
import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

/* Importing global styles */
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

/* Importing Context */
import CalcContext from './components/CalcContext';

/* Importing containers */
import Home from './containers/Home';
import CalculationsWrapper from './containers/CalculationsWrapper';
import PageNotFound from './containers/PageNotFound';

/* Importing components */
import Navigation from './components/Navigation';

const App = () => {
  const [submittedCount, setSubmittedCount] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [numberOfCalculations, setNumberOfCalculations] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [calculations, setCalculations] = useState();
  const [finishedTime, setFinishedTime] = useState(0);

  return (
    /* Setting up react-router-dom navigation */
    <Router>
      <CalcContext.Provider
        value={{
          correctCount,
          setCorrectCount,
          submittedCount,
          setSubmittedCount,
          numberOfCalculations,
          setNumberOfCalculations,
          seconds,
          setSeconds,
          finishedTime,
          setFinishedTime,
          calculations,
          setCalculations,
        }}
      >
        <Navigation />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/calculations' component={CalculationsWrapper} />
          <Route path='*' component={PageNotFound} />
        </Switch>
      </CalcContext.Provider>
    </Router>
  );
};

export default App;
