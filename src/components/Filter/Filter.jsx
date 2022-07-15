import React, { useState } from 'react';
import styles from './Filter.module.css';

import { RiArrowDropDownLine } from 'react-icons/ri';
import StyledHamburgerMenu from '../../components/HamburgerMenu/HamburgerMenu';
// import VectorDropDownIcon from '../../assets/images/VectorDropDownIcon.png'

// TESTING
import Dropdown from 'react-bootstrap/Dropdown';
import FitlterMultiSelect from '../FilterMultiSelect/FitlterMultiSelect';
import FilterSingleselect from '../FilterSingleSelect/FilterSingleSelect';
import FilterOrderSelect from '../FilterOrderSelect/FilterOrderSelect';

const Filter = () => {
  // FOR PRICE

  return (
    <div>
      <div className={styles.filterContainer}>
        <div className={styles.inRow}>
          <div className={styles.filterGrayText}>Filter By:</div>
          <FitlterMultiSelect name={'Location'} />
          <FilterSingleselect name={'Price'} valueOrder={null} />
        </div>
        <div className={styles.inRow}>
          <div className={styles.filterGrayText}>Order By:</div>
          <FilterOrderSelect name={'Most Popular'} />
          <StyledHamburgerMenu />
        </div>
      </div>
    </div>
  );
};

export default Filter;
