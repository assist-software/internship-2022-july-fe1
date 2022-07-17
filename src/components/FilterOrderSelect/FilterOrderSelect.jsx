import React, { useEffect, useState } from 'react';
import styles from './FilterOrderSelect.module.css';
import Dropdown from 'react-bootstrap/Dropdown';

import { useGlobalContext } from '../../Context/appContext';

const FilterOrderSelect = (props) => {
  const { name } = props;
  const { handleOrderFilter } = useGlobalContext();
  const [order, setOrder] = useState('Most popular');
  const [valueForDropDownOrder, setValueForDropDownOrder] = useState([
    'Most popular',
    'Price: Low to High',
    'Price: High to Low',
    'Featured',
  ]);

  // const valueForDropDownOrder = [
  //   'Most popular',
  //   'Price: Low to High',
  //   'Price: High to Low',
  //   'Featured',
  // ];

  // console.log('order', order);

  return (
    <>
      <Dropdown className={`${styles.dropDown} shadow-none`} title={name}>
        <Dropdown.Toggle variant="default">
          <span className={`${styles.textCategory} shadow-none ${styles.name}`}>
            {!name ? 'MultiSelect' : name}
          </span>
        </Dropdown.Toggle>
        <Dropdown.Menu className="shadow-none">
          <Dropdown.ItemText className={styles.name}>
            Order by
          </Dropdown.ItemText>
          {valueForDropDownOrder.map((orde, index) => (
            <Dropdown.Item
              key={index}
              as="button"
              onClick={() => {
                handleOrderFilter(orde);
              }}
            >
              <div className={`${styles.pointer} form-check`}>
                <input
                  className={`${styles.pointer} form-check-input`}
                  type="radio"
                  name="radioForOrder"
                  id={`radioForOrder${index}`}
                />
                <label
                  className={`${styles.pointer} form-check-label`}
                  htmlFor={`radioForOrder${index}`}
                >
                  {orde}
                </label>
              </div>
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

export default FilterOrderSelect;
