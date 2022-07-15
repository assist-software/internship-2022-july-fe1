import React, { useEffect, useState } from 'react';
import styles from './FilterOrderSelect.module.css';
import Dropdown from 'react-bootstrap/Dropdown';

const FilterOrderSelect = (props) => {
  const { name, valueOrder } = props;
  const [order, setOrder] = useState('Most popular');
  const [valueForOrder, setValueForOrder] = useState([
    'Most popular',
    'Price: Low to High',
    'Price: High to Low',
    'Featured',
  ]);

  useEffect(() => {
    valueOrder && setValueForOrder(valueOrder);
  }, []);

  console.log('order', order);

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
          {valueForOrder.map((orde, index) => (
            <Dropdown.Item
              key={index}
              as="button"
              onClick={() => {
                setOrder(orde);
              }}
            >
              {orde}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

export default FilterOrderSelect;
