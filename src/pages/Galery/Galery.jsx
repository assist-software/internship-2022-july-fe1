import React from 'react';
import { useParams } from 'react-router-dom';
// import styles from './Galery.module.css';

import StyledFormTitle from '../../components/FormTitle/FormTitle';
import Filter from '../../components/Filter/Filter';
import ContentContainer from '../../components/ContentContainer/ContentContainer';
import StyledListingButtons from '../../components/ListingButtons/ListingButtons';

const Galery = (props) => {
  let { galeryname } = useParams();

  return (
    <>
      <div className='container'>
        <StyledFormTitle text={galeryname}></StyledFormTitle>
        <StyledListingButtons
          firstText={'All listing'}
          secondText={'Pending approval'}
          firstPathname={''}
          secondPathname={''}
          pagesNumber={10}
        />
        {galeryname !== 'favourites' ? (
          <Filter location={true} price={true} order={true} />
        ) : (
          <Filter location={false} price={false} order={false} />
        )}
        <ContentContainer />
      </div>
    </>
  );
};

export default Galery;
