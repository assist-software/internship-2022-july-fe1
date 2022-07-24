import React, { useEffect, useState } from 'react';
import styles from './ContentContainer.module.css';

import { useNavigate } from 'react-router-dom';

import Card from '../Card/Card';
import { useGlobalContext } from '../../Context/appContext';
import Paginate from '../Paginate/Paginate';

const ContentContainer = () => {
  const navigate = useNavigate();
  const { state, displayWide, addToFavoriteContext } = useGlobalContext();
  const [cardToMap, setCardToMap] = useState(state);

  useEffect(() => {
    setCardToMap(state);
  }, [state]);

  const handleFavButton = (listingId) => {
    addToFavoriteContext(listingId);
  };

  const handleCardButton = (listingId) => {
    console.log('card clicked', listingId);
    navigate('/');
  };

  return (
    <>
      <section className={!displayWide ? styles.contentContainer : null}>
        {cardToMap.map((item, index) => {
          return (
            <Card
              key={item.id}
              id={item.id}
              title={item.title}
              price={item.price}
              location={item.location}
              description={item.shortDescription}
              onCardClick={() => handleCardButton(item.id)}
              onFavoriteClick={() => handleFavButton(item.id)}
              isFavorite={item.isFavorite}
              displayWide={displayWide}
              urlImage={item.images}
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
