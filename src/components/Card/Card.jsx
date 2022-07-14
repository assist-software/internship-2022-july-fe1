import React from 'react'
import styles from './Card.module.css'

import FavoriteBtn from '../FavoriteBtn/FavoriteBtn'
import ImageLogin from "../../assets/images/furniture.png"


const Card = ({ onClick,

  // when u will use uncommnet the props
  urlImage,
  title,
  subtitle,
  price = 121212121, isFavorite }) => {

  return (
    <div onClick={() => onClick()} className={styles.cardContainer}>
      <FavoriteBtn isActive={isFavorite} className={styles.favoriteBtnPosition} />
      <img className={styles.cardImg} src={ImageLogin} alt="" />
      <div className={styles.cardTitle}>Dreamy Treehouse Above Park City asdsa</div>
      <div className={styles.cardSubTitle}>Suceava, Romania</div>
      <div className={styles.cardTitle}>{`${price} lei`}</div>
    </div>
  )
}

export default Card