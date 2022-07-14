import PropTypes from 'prop-types';
import styles from './FavoriteBtn.module.css'
import VectorfavIcon from "../../assets/images/VectorfavIcon.png"
import VectorFavRedIcon from "../../assets/images/VectorFavRedIcon.png"


const FavoriteBtn = ({ className, isActive, onClick }) => {

  return (
    <div className={`${className} ${styles.favoriteBtn}`}>
      <div onClick={() => onClick()} className={styles.favoriteBtnCircle}>
        {isActive ?
          <img className={styles.centralIcon} src={VectorFavRedIcon} alt="" /> :
          <img className={styles.centralIcon} src={VectorfavIcon} alt="" />}
      </div>
    </div>
  );
}

export default FavoriteBtn