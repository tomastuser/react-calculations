import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const PageNotFound = () => {
  const buttonRef = useRef();

  useEffect(() => {
    buttonRef.current.focus();
  }, []);

  return (
    <div className='mainContainer'>
      <div className='containerName' style={{ justifyContent: 'right' }}>
        <Link to='/'>
          <button className='escape' ref={buttonRef} type='button' tabIndex='0'>
            <FontAwesomeIcon icon={faTimes} size='2x' />
          </button>
        </Link>
      </div>
      <div className='pageNotFound'>
        <h1>Page Not Found!</h1>
      </div>
    </div>
  );
};

export default PageNotFound;
