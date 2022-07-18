import React from 'react';
import styles from './Card.module.css';

import FavoriteBtn from '../FavoriteBtn/FavoriteBtn';
import ImageLogin from '../../assets/images/furniture.png';

const Card = ({
  displayWide,
  onCardClick,
  onFavoriteClick,
  // when u will use uncommnet the props
  urlImage,
  description,
  title,
  location,
  price,
  isFavorite = false,
}) => {
  const renderSmallCard = () => (
    <div onClick={() => onCardClick()} className={styles.smallCardContainer}>
      <FavoriteBtn
        isSmallCard
        isActive={isFavorite}
        className={styles.smallFavoriteBtnPosition}
        onClick={(e) => {
          onFavoriteClick();
          e.stopPropagation();
        }}
      />
      <img className={styles.smallCardImg} src={ImageLogin} alt="" />
      <div className={styles.smallCardTitle}>{title}</div>
      <div className={styles.smallCardSubTitle}>{location}, Romania</div>
      <div className={styles.smallCardTitle}>{`${price} lei`}</div>
    </div>
  );

  const renderWideCard = () => (
    <div onClick={() => onCardClick()} className={styles.wideCardContainer}>
      <img className={styles.wideCardImg} src={ImageLogin} alt="" />
      <div className={styles.wideCardContent}>
        <div className={styles.wideTitleContainer}>
          <div className={styles.wideCardTitle}>{title}</div>
          <div className={styles.wideCardSubtitle}>{location}, Romania</div>
          <FavoriteBtn
            isActive={isFavorite}
            className={styles.wideFavoriteBtnPosition}
            onClick={(e) => {
              onFavoriteClick();
              e.stopPropagation();
            }}
          />
        </div>
        <div className={styles.wideCardDescription}>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
        </div>
        <div className={styles.wideCardTitle}>{`${price} lei`}</div>
      </div>
    </div>
  );

  return displayWide ? renderWideCard() : renderSmallCard();
};

export default Card;
