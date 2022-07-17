import React from 'react';
// import styles from './Galery.module.css';

import StyledFormTitle from '../../components/FormTitle/FormTitle';
import Filter from '../../components/Filter/Filter';
import ContentContainer from '../../components/ContentContainer/ContentContainer';

const Galery = (props) => {
  // props care vor fi nevoie APROXIMATIV
  // groupOfCard totalItems location price oreder(from Backend)
  // viewMode currentPage paginate

  return (
    <>
      <div className="container">
        <StyledFormTitle text={'Latest'}></StyledFormTitle>
        <Filter location={true} price={true} order={true} />
        <ContentContainer />
      </div>
    </>
  );
};

export default Galery;
