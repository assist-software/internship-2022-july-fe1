import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import styles from './Galery.module.css';

import StyledFormTitle from '../../components/FormTitle/FormTitle';
import Filter from '../../components/Filter/Filter';
import ContentContainer from '../../components/ContentContainer/ContentContainer';

const Galery = (props) => {
  let { galeryname } = useParams();

  return (
    <>
      <div className="container">
        <StyledFormTitle text={galeryname}></StyledFormTitle>
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
