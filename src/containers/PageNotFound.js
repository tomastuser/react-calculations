import React from 'react';
import Container from 'react-bootstrap/Container';

const PageNotFound = () => {
  return (
    <Container
      className='d-flex justify-content-center align-items-center'
      style={{ height: '75vh' }}
    >
      <Container className='w-100 text-center'>
        <h1>Page Not Found!</h1>
      </Container>
    </Container>
  );
};

export default PageNotFound;
