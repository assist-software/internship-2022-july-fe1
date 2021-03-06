import React, { useState } from 'react';
import styles from './FilterSingleSelect.module.css';
import Dropdown from 'react-bootstrap/Dropdown';
import { useGlobalContext } from '../../Context/appContext';

const FilterSingleSelect = (props) => {
  const { requestOption, setRequestOption } = useGlobalContext();
  const { name, handlePriceFilter } = props;
  const [selectId, setSelectId] = useState({});

  const clickHandler = (item, index) => {
    console.log('item', item);
    console.log('index');
    setSelectId(index);
    handlePriceFilter(item);
    setRequestOption({ ...requestOption, price: item });
  };

  const valueForDropDown = [
    '0 - 10.000',
    '10.000 - 50.000',
    '50.000 - 100.000',
    '100.000 - 300.000',
    '300.000 - 700.000',
    '700.000 - 1.000.000',
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
          <Dropdown.ItemText className={styles.name}>{name}</Dropdown.ItemText>
          {valueForDropDown.map((item, index) => (
            <Dropdown.Item
              key={index}
              as="button"
              value={item}
              onClick={() => {
                clickHandler(item, index);
              }}
            >
              <div className={`${styles.pointer} form-check`}>
                <input
                  className={`${styles.pointer} form-check-input`}
                  type="radio"
                  name="radioForPrice"
                  checked={selectId === index}
                  onChange={() => {}}
                />
                <label
                  className={`${styles.pointer} form-check-label`}
                  htmlFor={`radioForPrice${index}`}
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

export default FilterSingleSelect;
