import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { useCalcContext } from './CalcContext';

const Navigation = () => {
  const {
    setCorrectCount,
    setSubmittedCount,
    setFinishedTime,
    setSeconds,
  } = useCalcContext();

  const reset = () => {
    setCorrectCount(0);
    setSubmittedCount(0);
    setFinishedTime(0);
    setSeconds(0);
  };
  return (
    <Navbar bg='primary' variant='dark'>
      <Nav className='d-flex w-100 justify-content-around text-uppercase'>
        <LinkContainer exact to='/'>
          <Nav.Link onClick={reset}>
            <h1 className='mb-0' id='home'>
              Home
            </h1>
          </Nav.Link>
        </LinkContainer>
        <LinkContainer exact to='/calculations'>
          <Nav.Link>
            <h1 className='mb-0' id='calculations'>
              Calculations
            </h1>
          </Nav.Link>
        </LinkContainer>
      </Nav>
    </Navbar>
  );
};

export default Navigation;
