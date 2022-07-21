import styles from './FavoriteBtn.module.css';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import React from 'react';
const FavoriteBtn = ({ className, isActive, isSmallCard, onClick }) => {
  return (
    <div className={`${className} ${styles.favoriteBtn}`}>
      <div
        onClick={(e) => onClick(e)}
        className={`${styles.favoriteBtnCircle} ${isActive && styles.whiteBackground}
         ${isSmallCard && !isActive && styles.backgroundSmallCard}
         ${!isSmallCard && !isActive && styles.backgroundWideCard}
        `}>
        {isActive ? (
          <FaHeart className={`${styles.centralIcon} ${styles.activeFavIcon}`} />
        ) : (
          <FaRegHeart
            className={`${styles.centralIcon} ${styles.favIcon} ${!isSmallCard && styles.greyIcon}`}
          />
        )}
      </div>
    </div>
  );
};

export default FavoriteBtn;
