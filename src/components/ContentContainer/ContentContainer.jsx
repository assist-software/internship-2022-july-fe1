import React from 'react';
import styles from './ContentContainer.module.css';

import Card from '../Card/Card';

import { useGlobalContext } from '../../Context/appContext';

const ContentContainer = () => {
  const { state, displayWide } = useGlobalContext();

  return (
    <section className={styles.contentContainer}>
      {state.map((item) => {
        return (
          <Card
            key={item.id}
            title={item.title}
            price={item.price}
            location={item.location}
            onClick={() => console.log('tste')}
            isFavorite={item.isFavorite}
            displayWide={displayWide}
          />
        );
      })}
    </section>
  );
};

export default ContentContainer;
