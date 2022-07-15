import React, { useState } from 'react';
import styles from './FilterSingleSelect.module.css';
import Dropdown from 'react-bootstrap/Dropdown';

const FilterSingleSelect = (props) => {
  const { name } = props;

  const [location, setLocation] = useState('Location');
  const testLocation = [
    { label: 'Location', value: 'fruit', checked: false },
    { label: 'Vegetable', value: 'vegetaable', checked: false },
    { label: 'Meat', value: 'meat', checked: false },
  ];

  const handleChangeValue = (event) => {
    setLocation(event.target.value);
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
          {locations.map((item, index) => (
            <Dropdown.Item
              key={index}
              as="button"
              onClick={() => {
                handleChangeValue(index);
              }}
            >
              {item.label}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

export default FilterSingleSelect;
