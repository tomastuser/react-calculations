import React, {
  useState,
  useEffect,
  useRef,
  useContext,
  useCallback,
} from 'react';
import { PropTypes } from 'prop-types';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';

import { useCalcContext } from './CalcContext';

const Calculation = ({ id, n, m, operatorNumber }) => {
  const [validated, setValidated] = useState(false);
  const [isRight, setIsRight] = useState(0);
  const [answer, setAnswer] = useState('');
  const inputRef = useRef();
  const operator =
    operatorNumber === 0
      ? '+'
      : operatorNumber === 1
      ? '-'
      : operatorNumber === 2
      ? 'x'
      : '/';

  const {
    submittedCount,
    setSubmittedCount,
    setCorrectCount,
  } = useCalcContext();

  const getRightAnswer = useCallback(() => {
    if (operatorNumber === 0) return n + m;
    else if (operatorNumber === 1) return n - m;
    else if (operatorNumber === 2) return n * m;
    return n / m;
  }, [operatorNumber, n, m]);

  useEffect(() => {
    if (submittedCount === id) {
      inputRef.current.focus();
    }
  }, [submittedCount, id]);

  const handleAnswer = useCallback(
    (value) => {
      setSubmittedCount((sC) => sC + 1);
      if (value === getRightAnswer()) {
        setIsRight(1);
        setCorrectCount((cC) => cC + 1);
      } else setIsRight(-1);
      inputRef.current.disabled = true;
    },
    [getRightAnswer, setCorrectCount, setSubmittedCount]
  );

  const handleSubmit = (e) => {
    if (e.key === 'Enter' || e.key === 'Tab') {
      e.preventDefault();
      if (e.target.value.length > 0 && !isNaN(e.target.value)) {
        setValidated(false);
        handleAnswer(Number(e.target.value));
      } else setValidated(true);
    }
  };

  const handleChange = (e) => {
    setAnswer(e.target.value);
  };

  return (
    <Container
      className={
        isRight === 0
          ? 'd-flex flex-row justify-content-center p-2 m-2 bg-secondary'
          : isRight === 1
          ? 'd-flex flex-row justify-content-center p-2 m-2 bg-success'
          : 'd-flex flex-row justify-content-center p-2 m-2 bg-danger'
      }
      style={{
        flexShrink: '1',
        flexBasis: '220px',
        backgroundColor: 'lightgrey',
      }}
    >
      <Row className='d-flex align-items-center justify-content-center p-3'>
        <h3 className='pr-3 mb-0'>{`${n} ${operator} ${m} = `}</h3>
        <Form
          noValidate
          validated={validated}
          className='w-25'
          onKeyDown={handleSubmit}
        >
          <Form.Control
            ref={inputRef}
            placeholder=''
            required
            type='number'
            value={answer}
            onChange={handleChange}
          />
        </Form>
      </Row>
    </Container>
  );
};

Calculation.propTypes = {
  id: PropTypes.number.isRequired,
  n: PropTypes.number.isRequired,
  m: PropTypes.number.isRequired,
  operatorNumber: PropTypes.number.isRequired,
};

export default Calculation;
