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
  const [price, setPrice] = useState('Price');
  const testPrice = [
    { label: '0 - 10.000', value: '0 - 10000' },
    { label: '10.000 - 50.0000', value: '10.0002 - 50.0000' },
    { label: '50.000 - 100.000', value: '50.000 - 100.000' },
  ];
  const handleChangePrice = (event) => {
    setPrice(event.target.value);
  };

  const [field, setField] = useState([]);

  return (
    <div>
      <div className={styles.filterContainer}>
        <div className={styles.inRow}>
          <div className={styles.filterGrayText}>Filter By:</div>
          <FitlterMultiSelect name={'Location'} />
          <FilterSingleselect name={'Price'} />
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
