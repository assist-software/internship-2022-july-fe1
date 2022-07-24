import React, { useEffect, useState } from 'react';
import styles from './Filter.module.css';

import StyledHamburgerMenu from '../../components/HamburgerMenu/HamburgerMenu';
import FitlterMultiSelect from '../FilterMultiSelect/FitlterMultiSelect';
import FilterSingleselect from '../FilterSingleSelect/FilterSingleSelect';
import FilterOrderSelect from '../FilterOrderSelect/FilterOrderSelect';

// import { useGlobalContext } from '../../Context/appContext';

const Filter = ({ location, price, order }) => {
  // const { requestOption } = useGlobalContext;

  //ALL FILTER STATE
  const [locationFIlter, setLocationFilter] = useState([]);
  const [priceFIlter, setPriceFilter] = useState(null);
  const [orderFilter, setOrderFIlter] = useState(null);

  const handleLocationFilter = (location) => {
    setLocationFilter(location);
    // setRequestOption({...requestOption, locations: })
  };
  const handlePriceFilter = (priceFromFilter) => {
    setPriceFilter(priceFromFilter);
    // const temData = { ...requestOption, price: priceFromFilter };

    // setRequestOption(temData);
  };
  const handleOrderFilter = (order) => {
    setOrderFIlter(order);
  };

  useEffect(() => {
    // console.log('ceva se inschimba', locationFIlter, priceFIlter, orderFilter);
  }, [locationFIlter, priceFIlter, orderFilter]);

  return (
    <div>
      <div className={styles.filterContainer}>
        <div className={styles.inRow}>
          {!location & !price ? null : (
            <div className={styles.filterGrayText}>Filter By:</div>
          )}
          {location && (
            <FitlterMultiSelect
              name={'Location'}
              handleLocationFilter={handleLocationFilter}
            />
          )}
          {price && (
            <FilterSingleselect
              name={'Price'}
              handlePriceFilter={handlePriceFilter}
            />
          )}
        </div>
        <div className={styles.inRow}>
          {order && <div className={styles.filterGrayText}>Order By:</div>}
          {order && (
            <FilterOrderSelect
              name={'Most Popular'}
              handleOrderFilter={handleOrderFilter}
            />
          )}
          <StyledHamburgerMenu />
        </div>
      </div>
    </div>
  );
};

export default Filter;
