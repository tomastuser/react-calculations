import React, { useEffect } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TimerIcon from '@material-ui/icons/Timer';
import Calculation from '../components/Calculation';
import FinishedModal from '../components/FinishedModal';
import { useCalcContext } from '../components/CalcContext';

const CalculationsWrapper = () => {
  const {
    correctCount,
    submittedCount,
    numberOfCalculations,
    seconds,
    setSeconds,
    calculations,
  } = useCalcContext();

  useEffect(() => {
    const timer = setInterval(() => {
      if (numberOfCalculations > 0) setSeconds(seconds + 1);
    }, 1000);
    if (numberOfCalculations > 0 && submittedCount === numberOfCalculations)
      clearInterval(timer);
    return () => clearInterval(timer);
  });

  return (
    <div>
      <Container fluid className='p-3'>
        <Row
          className='d-flex flex-wrap justify-content-center align-items-start'
          style={{ marginBottom: '12vh' }}
        >
          {numberOfCalculations >= 20 && numberOfCalculations <= 60 ? (
            calculations.map((cal) => (
              <Calculation
                key={cal.id}
                id={cal.id}
                n={cal.n}
                m={cal.m}
                operatorNumber={cal.operatorNumber}
              />
            ))
          ) : (
            <h4 className='w-100 text-center' style={{ marginTop: '35vh' }}>
              Please choose a number of calculations between 20 and 60.
            </h4>
          )}
        </Row>
        <Row
          className='d-flex align-items-center position-fixed fixed-bottom py-2 px-4'
          style={{ backgroundColor: 'rgba(255,255,255,0.8)' }}
        >
          <Col>
            <h1 className='text-left'>{`Finished: ${correctCount} / ${numberOfCalculations}`}</h1>
          </Col>
          <Col>
            <div className='d-flex align-items-center justify-content-end'>
              <h1 className='p-1'>{`${seconds}s`}</h1>
              <h1 className='p-1'>
                <TimerIcon fontSize='inherit' />
              </h1>
            </div>
          </Col>
        </Row>
        {numberOfCalculations > 0 &&
          submittedCount === numberOfCalculations && <FinishedModal />}
      </Container>
    </div>
  );
};

export default CalculationsWrapper;
