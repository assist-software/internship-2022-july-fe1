import React, { useState } from 'react';
import styles from './Card.module.css';
import { useNavigate } from 'react-router-dom';

import FavoriteBtn from '../FavoriteBtn/FavoriteBtn';
import ImageLogin from '../../assets/images/furniture.png';

import { useGlobalContext } from '../../Context/appContext';

const Card = ({
  id,
  displayWide,
  onCardClick,
  onFavoriteClick,
  urlImage,
  description,
  title,
  location,
  price,
  isFavorite = false,
}) => {
  //State for handle deleted listing background
  const [isDeleted, setIsDeleted] = useState(false);
  const handleDeletedListing = () => {
    setIsDeleted(true);
  };
  //State for handle delete item
  const [onDeleteClick, setOnDeleteClick] = useState(false);
  const handleOnDeleteClick = () => {
    setOnDeleteClick(!onDeleteClick);
    console.log(onDeleteClick);
  };

  const navigate = useNavigate();
  let { deleteList } = useGlobalContext();

  const handleEditButton = (id) => {
    navigate(`/editpost/${id}`);
  };
  const handleDeleteButton = (id) => {
    deleteList(id);
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
      <img
        className={styles.smallCardImg}
        src={urlImage || ImageLogin}
        alt=''
      />
      <div className={styles.smallCardTitle}>{title}</div>
      <div className={styles.smallCardSubTitle}>{location}, Romania</div>
      <div className={styles.smallCardTitle}>{`${price} lei`}</div>
    </div>
  );

  const renderWideCard = () => (
    <>
      <div
        onClick={() => onCardClick()}
        className={
          isDeleted
            ? `${styles.wideCardContainer2}`
            : `${styles.wideCardContainer}`
        }
        // className={styles.wideCardContainer2}
      >
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
            className={styles.approveButton}
            onClick={() => console.log('You hit approve')}
          >
            Aprove
          </button>
          <button
            className={styles.deleteButton}
            onClick={() => handleDeleteButton(id)}
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
        {isDeleted && (
          <p className={styles.deletedListing}>Listing has been deleted</p>
        )}
      </div>
      {onDeleteClick && (
        <div className={styles.deleteModalContainer}>
          <div className={styles.deleteModalContent}>
            <header>Delete listing</header>
            <p>You cannot recover the listing after deleting it.</p>
            <div className={styles.deleteModalButtons}>
              <div
                className={styles.deleteModalButton}
                onClick={() => {
                  handleDeletedListing();
                  handleOnDeleteClick();
                }}
              >
                Delete
              </div>
              <div
                className={styles.backModalButton}
                onClick={() => handleOnDeleteClick()}
              >
                Back
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );

  return displayWide ? renderWideCard() : renderSmallCard();
};

export default Card;
