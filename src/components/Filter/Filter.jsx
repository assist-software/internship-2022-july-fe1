import React from 'react';
import styles from './Filter.module.css';

import StyledHamburgerMenu from '../../components/HamburgerMenu/HamburgerMenu';
import FitlterMultiSelect from '../FilterMultiSelect/FitlterMultiSelect';
import FilterSingleselect from '../FilterSingleSelect/FilterSingleSelect';
import FilterOrderSelect from '../FilterOrderSelect/FilterOrderSelect';

const Filter = ({ location, price, order }) => {
  return (
    <div>
      <div className={styles.filterContainer}>
        <div className={styles.inRow}>
          {!location & !price ? null : (
            <div className={styles.filterGrayText}>Filter By:</div>
          )}
          {location && <FitlterMultiSelect name={'Location'} />}
          {price && <FilterSingleselect name={'Price'} />}
        </div>
        <div className={styles.inRow}>
          {order && <div className={styles.filterGrayText}>Order By:</div>}
          {order && <FilterOrderSelect name={'Most Popular'} />}
          <StyledHamburgerMenu />
        </div>
      </div>
    </div>
  );
};

export default Filter;
