import React, { useEffect, useState } from 'react';
import styles from './FilterMultiSelect.module.css';
import Dropdown from 'react-bootstrap/Dropdown';

import { useGlobalContext } from '../../Context/appContext';

const FitlterMultiSelect = (props) => {
  const { name, handleLocationFilter } = props;
  const { state } = useGlobalContext();
  let chekingIfLocationExist = [];
  const [selectedLocation, setSelectedLocation] = useState([]);

  const [locations, setLocations] = useState(state);

  console.log('state', state);
  // console.log('locations', locations);

  const handleLocationClick = (locationIndex, loc) => {
    const locationClone = [...locations];
    locationClone[locationIndex].checked =
      !locationClone[locationIndex].checked;
    setLocations(locationClone);
    if (selectedLocation.includes(loc)) {
      const temLocation = selectedLocation.filter((item) => item !== loc);
      setSelectedLocation(temLocation);
    } else {
      setSelectedLocation([...selectedLocation, loc]);
    }
  };

  useEffect(() => {
    handleLocationFilter(selectedLocation);
  }, [selectedLocation, handleLocationFilter]);

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
          {locations?.map((locatio, index) => {
            console.log('locatio', locatio);
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
                      onChange={() => {}}
                    />
                    {locatio.location}
                  </div>
                </Dropdown.Item>
              );
            }
            return console.log();
          })}
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

export default FitlterMultiSelect;
