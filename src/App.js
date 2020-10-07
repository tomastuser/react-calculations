/* Importing libraries */
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

/* Importing global styles */
import 'bootstrap/dist/css/bootstrap.min.css';

/* Importing Context */
import { CalcContext } from './components/CalcContext';

/* Importing containers */
import Home from './containers/Home';
import CalculationsWrapper from './containers/CalculationsWrapper';
import PageNotFound from './containers/PageNotFound';

const App = () => {
  const [submittedCount, setSubmittedCount] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [numberOfCalculations, setNOC] = useState();

  useEffect(() => {
    const rand = Math.ceil(Math.random() * 10) + 5;
    setNOC(rand);
    console.log('setting');
  }, []);

  return (
    /* Setting up react-router-dom navigation */
    <Router>
      <main>
        <CalcContext.Provider
          value={{
            correctCount,
            setCorrectCount,
            submittedCount,
            setSubmittedCount,
            numberOfCalculations,
          }}
        >
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/calculations' component={CalculationsWrapper} />
            <Route path='*' exact component={PageNotFound} />
          </Switch>
        </CalcContext.Provider>
      </main>
    </Router>
  );
};

export default App;
