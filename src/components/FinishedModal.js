import React, { useEffect, useState, useRef } from 'react';
import Modal from 'react-bootstrap/Modal';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { useHistory } from 'react-router-dom';
import { useCalcContext } from './CalcContext';

const FinishedModal = () => {
  const {
    submittedCount,
    numberOfCalculations,
    correctCount,
    setCorrectCount,
    setSubmittedCount,
    seconds,
    setSeconds,
    finishedTime,
    setFinishedTime,
  } = useCalcContext();
  const [show, setShow] = useState(false);
  const history = useHistory();
  const inputRef = useRef();

  useEffect(() => {
    if (submittedCount === numberOfCalculations) {
      setShow(true);
      setFinishedTime(seconds);
      setTimeout(() => {
        inputRef.current.focus();
      }, 50);
    }
  }, [submittedCount, numberOfCalculations, setFinishedTime, seconds]);

  const handleClose = () => setShow(false);

  const tryAgain = () => {
    setShow(false);
    setCorrectCount(0);
    setSubmittedCount(0);
    setFinishedTime(0);
    setSeconds(0);
    history.push('/');
  };

  return (
    <Modal show={show} onHide={handleClose} keyboard autoFocus centered>
      <Modal.Header closeButton>
        <Modal.Title>
          <h2>Finished</h2>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {correctCount === submittedCount ? (
          <>
            <h3>Success Rate: 100%</h3>
            <p>
              {`You have answered all the calculations correctly in ${finishedTime} ${
                Number(finishedTime) === 1 ? 'second' : 'seconds'
              }.`}
            </p>
          </>
        ) : (
          <>
            <h3>
              {`Success Rate: ${Math.round(
                (correctCount / numberOfCalculations) * 100
              )} %.`}
            </h3>
            <p>
              {`You have answered ${correctCount} of the ${numberOfCalculations} 
            calculations correctly in ${finishedTime} ${
                Number(finishedTime) === 1 ? 'second' : 'seconds'
              }.`}
            </p>
          </>
        )}
      </Modal.Body>
      <Modal.Footer>
        <ButtonGroup toggle>
          <ToggleButton
            variant='primary'
            size='lg'
            type='radio'
            value='1'
            ref={inputRef}
            onClick={tryAgain}
            onKeyPress={tryAgain}
          >
            Try again
          </ToggleButton>
        </ButtonGroup>
      </Modal.Footer>
    </Modal>
  );
};

export default FinishedModal;
