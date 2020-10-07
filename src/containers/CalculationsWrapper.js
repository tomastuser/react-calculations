import React, { useState, useEffect, useContext } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Stopwatch } from 'react-bootstrap-icons';

import Calculation from '../components/Calculation';
import { CalcContext } from '../components/CalcContext';

const CalculationsWrapper = () => {
  const [seconds, setSeconds] = useState(0);
  const [calculations, setCalculations] = useState([]);
  const { correctCount, numberOfCalculations } = useContext(CalcContext);
  useEffect(() => {
    const array = [];
    for (let i = 0; i < numberOfCalculations; i += 1) {
      array.push(i);
    }
    setCalculations(array);
  }, []);
  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds(seconds + 1);
    }, 1000);
    return () => clearInterval(timer);
  });
  return (
    <div>
      <Container fluid className='p-5'>
        <div className='d-flex flex-wrap justify-content-center'>
          {calculations.map((cal) => (
            <Calculation key={cal} />
          ))}
        </div>
        <Row>
          <Col>
            <h1 className='text-left'>{`Finished: ${correctCount} / ${numberOfCalculations}`}</h1>
          </Col>
          <Col>
            <div className='d-flex align-items-center justify-content-end'>
              <h2 className='p-1'>
                <Stopwatch />
              </h2>
              <h1 className='p-1'>{`${seconds}s`}</h1>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CalculationsWrapper;
