import React, { useState, useEffect, useRef, useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import { CalcContext } from './CalcContext';

const Calculation = () => {
  const [isRight, setIsRight] = useState(0);
  const [n, setN] = useState();
  const [m, setM] = useState();
  const inputRef = useRef();

  const { submittedCount, setSubmittedCount } = useContext(CalcContext);
  const { correctCount, setCorrectCount } = useContext(CalcContext);

  useEffect(() => {
    setN(Math.ceil(Math.random() * 10));
    setM(Math.ceil(Math.random() * 10));
  }, []);

  const handleSubmit = (e) => {
    if (e.key === 'Enter') {
      setSubmittedCount(submittedCount + 1);
      if (Number(e.target.value) === n + m) {
        setIsRight(1);
        setCorrectCount(correctCount + 1);
      } else setIsRight(-1);
      inputRef.current.disabled = true;
    }
  };

  return (
    <Container
      className={
        isRight === 0
          ? 'd-flex flex-row p-2 m-3 bg-secondary'
          : isRight === 1
          ? 'd-flex flex-row p-2 m-3 bg-success'
          : 'd-flex flex-row p-2 m-3 bg-danger'
      }
      style={{ flexBasis: '20%', flexGrow: '1' }}
    >
      <Row className='d-flex align-items-center justify-content-center'>
        <h2 className='p-2'>{`${n} + ${m} = `}</h2>
        <InputGroup className='w-25' onKeyDown={handleSubmit}>
          <FormControl
            ref={inputRef}
            placeholder=''
            aria-label="Recipient's username"
            aria-describedby='basic-addon2'
          />
        </InputGroup>
      </Row>
    </Container>
  );
};

export default Calculation;
