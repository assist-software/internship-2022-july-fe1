import React, { useEffect, useState } from 'react';
import styles from './FilterSingleSelect.module.css';
import Dropdown from 'react-bootstrap/Dropdown';

const FilterSingleSelect = (props) => {
  const { name, valueOrder } = props;

  const [valueForDrop, setValueForDrop] = useState([
    { price: '0 - 10.000', value: '0 - 10000' },
    { price: '10.000 - 50.0000', value: '10.0002 - 50.0000' },
    { price: '50.000 - 100.000', value: '50.000 - 100.000' },
  ]);

  useEffect(() => {
    valueOrder && setValueForDrop(valueOrder);
  }, []);

  const handleChangeValue = (price) => {
    console.log(price);
  };

  return (
    <>
      <Dropdown className={`${styles.dropDown} shadow-none`} title={name}>
        <Dropdown.Toggle variant="default">
          <span className={`${styles.textCategory} shadow-none ${styles.name}`}>
            {!name ? 'MultiSelect' : name}
          </span>
        </Dropdown.Toggle>
        <Dropdown.Menu className="shadow-none">
          <Dropdown.ItemText className={styles.name}>{name}</Dropdown.ItemText>
          {valueForDrop.map((item, index) => (
            <Dropdown.Item
              key={index}
              as="button"
              value={item.price}
              onClick={() => {
                handleChangeValue(item.price);
              }}
            >
              {item.price}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

export default FilterSingleSelect;
