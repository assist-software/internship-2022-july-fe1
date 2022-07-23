import React, { useState } from 'react';
import styles from './Card.module.css';
import { useNavigate } from 'react-router-dom';

import FavoriteBtn from '../FavoriteBtn/FavoriteBtn';
import ImageLogin from '../../assets/images/furniture.png';

import { APIData } from '../../api/APIData';
import { useGlobalContext } from '../../Context/appContext';

const Card = ({
  id,
  displayWide,
  onCardClick,
  onFavoriteClick,
  // urlImage,
  description,
  title,
  location,
  price,
  isFavorite = false,
}) => {
  //State for handle delete item
  const [onDeleteClick, setOnDeleteClick] = useState(false);
  const handleOnDeleteClick = () => {
    setOnDeleteClick(!onDeleteClick);
    console.log(onDeleteClick);
  };

  const navigate = useNavigate();
  let { state } = useGlobalContext();

  const handleEditButton = (id) => {
    console.log('edit clicked');
    navigate(`/editpost/${id}`);
  };
  const handleDeleteButton = (id) => {
    console.log('delete clicked');
    APIData.deletePost(id);
    state = state.filter((item) => item.id !== id);
  };

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
      <img className={styles.smallCardImg} src={ImageLogin} alt='' />
      <div className={styles.smallCardTitle}>{title}</div>
      <div className={styles.smallCardSubTitle}>{location}, Romania</div>
      <div className={styles.smallCardTitle}>{`${price} lei`}</div>
    </div>
  );

  const renderWideCard = () => (
    <>
      <div onClick={() => onCardClick()} className={styles.wideCardContainer}>
        <div className={styles.rowElements}>
          <img className={styles.wideCardImg} src={ImageLogin} alt='' />
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
            <div className={styles.wideCardDescription}>{description}</div>
            <div className={styles.wideCardTitle}>{`${price} lei`}</div>
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <button
            className={styles.deleteButton}
            onClick={() => {
              handleDeleteButton(id);
              handleOnDeleteClick();
            }}
          >
            Delete
          </button>
          <button
            className={styles.editButton}
            onClick={() => handleEditButton(id)}
          >
            Edit
          </button>
        </div>
      </div>
      {onDeleteClick && (
        <div
          className={styles.deleteModalContainer}
          onClick={() => handleOnDeleteClick()}
        >
          <div className={styles.deleteModalContent}>
            <header>Delete listing</header>
            <p>You cannot recover the listing after deleting it.</p>
            <div className={styles.deleteModalButtons}>
              <div className={styles.deleteModalButton}>Delete</div>
              <div className={styles.backModalButton}>Back</div>
            </div>
          </div>
        </div>
      )}
    </>
  );

  return displayWide ? renderWideCard() : renderSmallCard();
};

export default Card;
