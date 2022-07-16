import React, { useState } from 'react';
import styles from './Filter.module.css';

import StyledHamburgerMenu from '../../components/HamburgerMenu/HamburgerMenu';
import FitlterMultiSelect from '../FilterMultiSelect/FitlterMultiSelect';
import FilterSingleselect from '../FilterSingleSelect/FilterSingleSelect';
import FilterOrderSelect from '../FilterOrderSelect/FilterOrderSelect';

import { useGlobalContext } from '../../Context/appContext';

const Filter = () => {
  const { singleElement, state } = useGlobalContext();

  // console.log(state);

  // console.log('singleElement(location)', singleElement('location'));

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
