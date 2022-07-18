import Button from 'react-bootstrap/Button';

import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const CardSeeEverything = () => {
  function seeEverything() {
    console.log('see everything');
  }
  return (
    <div>
      <div className='cardContainer'>
        <FiArrowRight className='fiArrowRBtn' />
        <Button variant='default' className='seeEverythingBtn' onClick={() => seeEverything()}>
          <span className='seeEverythingSpan'>See everything</span>
          <Link to={'/seeEverything'}></Link>
        </Button>
      </div>
    </div>
  );
};

export default CardSeeEverything;
