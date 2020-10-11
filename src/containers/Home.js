import React, { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { useCalcContext } from '../components/CalcContext';

const Home = () => {
  const { setNumberOfCalculations, setCalculations } = useCalcContext();
  const [msg, setMsg] = React.useState('');
  const [validated, setValidated] = useState(false);
  const inputRef = useRef();
  const history = useHistory();

  const generateCalculations = (noc) => {
    const calcs = [];
    for (let i = 0; i < noc; i += 1) {
      const oN = Math.floor(Math.random() * 4);
      let a = Math.ceil(Math.random() * 10);
      let b = Math.ceil(Math.random() * 10);
      if (oN === 3) {
        while (a <= b || a % b !== 0 || a > b * 10) {
          a = Math.ceil(Math.random() * 99);
          b = Math.ceil(Math.random() * 10);
        }
      }
      const calc = {
        id: i,
        operatorNumber: oN,
        n: a,
        m: b,
      };
      calcs.push(calc);
    }
    return calcs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = Number(inputRef.current.value);
    if (value >= 20 && value <= 60) {
      setValidated(false);
      setNumberOfCalculations(value);
      setCalculations(generateCalculations(value));
      history.push('/calculations');
    } else {
      setMsg('Please choose a number between 20 and 60.');
      setValidated(true);
    }
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <Container
      className='text-center home'
      style={{ width: '300px', marginTop: '23vh' }}
    >
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>
            <h1>NoC</h1>
          </Form.Label>

          <Form.Text
            className='text-danger mb-0 pb-3'
            id='inputWarning'
            style={{ fontSize: '1rem' }}
          >
            {msg}
          </Form.Text>
          <Form.Control
            type='number'
            required
            min='20'
            max='60'
            placeholder='Choose a number of calculations...'
            ref={inputRef}
            className='mb-3'
            id='calculationsInput'
          />
        </Form.Group>
        <Button
          variant='primary'
          type='submit'
          size='lg'
          className='w-100'
          id='calculationsSubmit'
        >
          START
        </Button>
      </Form>
    </Container>
  );
};

export default Home;
