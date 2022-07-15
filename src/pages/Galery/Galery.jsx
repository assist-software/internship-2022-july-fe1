import React from 'react';
import styles from './Galery.module.css';

import StyledFormTitle from '../../components/FormTitle/FormTitle';
import Card from '../../components/Card/Card';
import Filter from '../../components/Filter/Filter';

const Galery = (props) => {
  // props care vor fi nevoie APROXIMATIV
  // groupOfCard totalItems location price oreder(from Backend)
  // viewMode currentPage paginate

  return (
    <>
      <div className="container">
        <div className={styles.subtitle}>
          <StyledFormTitle text={'Latest'}></StyledFormTitle>
        </div>
        <Filter />
        <section className="">
          <Card onClick={() => console.log('tste')} isFavorite={true} />
        </section>
      </div>
    </>
  );
};

export default Galery;
