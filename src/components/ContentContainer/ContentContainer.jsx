import React, { useEffect, useState } from 'react';
import styles from './ContentContainer.module.css';

import Card from '../Card/Card';

import { useGlobalContext } from '../../Context/appContext';
import Paginate from '../Paginate/Paginate';

const ContentContainer = () => {
  const { state, displayWide } = useGlobalContext();
  const [cardToMap, setCardToMap] = useState(state);

  useEffect(() => {
    setCardToMap(state);
  }, [state]);

  return (
    <>
      <section className={!displayWide ? styles.contentContainer : null}>
        {cardToMap?.map((item, index) => {
          return (
            <Card
              key={item.id}
              id={item.id}
              title={item.title}
              price={item.price}
              location={item.location}
              description={item.shortDescription}
              onCardClick={() => console.log('card clicked')}
              onFavoriteClick={() => console.log('fav button clicked')}
              isFavorite={item.isFavorite}
              displayWide={displayWide}
            />
          );
        })}
      </section>

      <div className={styles.paginateSection}>
        <Paginate />
      </div>
    </>
  );
};

export default ContentContainer;
