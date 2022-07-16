import React, { useEffect, useState } from 'react';
import styles from './FilterMultiSelect.module.css';
import Dropdown from 'react-bootstrap/Dropdown';

import { useGlobalContext } from '../../Context/appContext';

const FitlterMultiSelect = (props) => {
  const { name, locationProp } = props;
  const { state, singleElement, id } = useGlobalContext();
  const [selectedLocation, setSelectedLocation] = useState([]);
  let chekingIfLocationExist = [];

  const testLocation = state;

  let incercare = singleElement('location');

  incercare = incercare.map((item) => {});

  // [
  //   { location: 'Suceava', value: 'fruit', checked: false },
  //   { location: 'Bucuresti', value: 'vegetaable', checked: false },
  //   { location: 'Bucuresti', value: 'vegetaable', checked: false },
  //   { location: 'Bucuresti', value: 'vegetaable', checked: false },
  //   { location: 'Bucuresti', value: 'vegetaable', checked: false },
  //   { location: 'Cluj', value: 'meat', checked: false },
  // ];

  const [locations, setLocations] = useState(testLocation);

  const handleLocationClick = (locationIndex, loc) => {
    const locationClone = [...locations];
    locationClone[locationIndex].checked =
      !locationClone[locationIndex].checked;
    setLocations(locationClone);

    console.log(loc);

    if (selectedLocation.includes(loc)) {
      const temLocation = selectedLocation.filter((item) => item !== loc);
      setSelectedLocation(temLocation);
    } else {
      setSelectedLocation([...selectedLocation, loc]);
    }
  };

  useEffect(() => {
    console.log('selectedLocation', selectedLocation);
  }, [selectedLocation]);

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
          {locations.map((locatio, index) => {
            if (!chekingIfLocationExist.includes(locatio.location)) {
              chekingIfLocationExist.push(locatio.location);
              return (
                <Dropdown.Item
                  key={index}
                  as="button"
                  onClick={() => {
                    handleLocationClick(index, locatio.location);
                  }}
                >
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className={styles.customControlInput}
                      id="defaultUnchecked"
                      checked={locatio.checked}
                      onChange={() => handleCheckdBox()}
                    />
                    {locatio.location}
                  </div>
                </Dropdown.Item>
              );
            }
          })}
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

export default FitlterMultiSelect;
