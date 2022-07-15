import React, { useState } from 'react';
import styles from './FilterMultiSelect.module.css';
import Dropdown from 'react-bootstrap/Dropdown';

const FitlterMultiSelect = (props) => {
  const { name } = props;

  const [location, setLocation] = useState('Location');
  const testLocation = [
    { label: 'Suceava', value: 'fruit', checked: false },
    { label: 'Bucuresti', value: 'vegetaable', checked: false },
    { label: 'Cluj', value: 'meat', checked: false },
  ];

  const [locations, setLocations] = useState(testLocation);

  const handleLocationClick = (locationIndex) => {
    const locationClone = [...locations];
    locationClone[locationIndex].checked =
      !locationClone[locationIndex].checked;
    setLocations(locationClone);
  };

  const handleChangeLocation = (event) => {
    setLocation(event.target.value);
  };

  const handleCheckdBox = () => {
    console.log('in handleCheckdBox', 'aaa');
  };

  return (
    <>
      <Dropdown className={`${styles.dropDown} shadow-none`} title="Location">
        <Dropdown.Toggle variant="default">
          <span className={`${styles.textCategory} shadow-none ${styles.name}`}>
            {!name ? 'MultiSelect' : name}
          </span>
        </Dropdown.Toggle>
        <Dropdown.Menu className="shadow-none">
          <Dropdown.ItemText className={styles.name}>{name}</Dropdown.ItemText>
          {locations.map((location, index) => (
            <Dropdown.Item
              key={index}
              as="button"
              onClick={() => {
                handleLocationClick(index);
              }}
            >
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className={styles.customControlInput}
                  id="defaultUnchecked"
                  checked={location.checked}
                  onChange={() => handleCheckdBox()}
                />
                {location.label}
              </div>
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

export default FitlterMultiSelect;
