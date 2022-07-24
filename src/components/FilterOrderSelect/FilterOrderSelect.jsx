import React, { useState } from 'react';
import styles from './FilterOrderSelect.module.css';
import Dropdown from 'react-bootstrap/Dropdown';
import { useGlobalContext } from '../../Context/appContext';

const FilterOrderSelect = (props) => {
  const { name, handleOrderFilter } = props;
  const [selectedId, setSelectedId] = useState({});
  const { requestOption, setRequestOption } = useGlobalContext();

  const clickHandler = (item, index) => {
    setSelectedId(index);
    setRequestOption({ ...requestOption, orderBy: item });
  };

  const valueForDropDownOrder = [
    'Most popular',
    'Price: Low to High',
    'Price: High to Low',
    'Featured',
  ];

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
          {valueForDropDownOrder.map((item, index) => (
            <Dropdown.Item
              key={index}
              as="button"
              onClick={() => {
                clickHandler(item, index);
              }}
            >
              <div className={`${styles.pointer} form-check`}>
                <input
                  className={`${styles.pointer} form-check-input`}
                  type="radio"
                  name="radioForOrder"
                  checked={selectedId === index}
                  onChange={() => {}}
                />
                <label
                  className={`${styles.pointer} form-check-label`}
                  htmlFor={`radioForOrder${index}`}
                >
                  {item}
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
