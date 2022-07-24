import React, { useEffect, useState } from 'react';
import styles from './FilterMultiSelect.module.css';
import Dropdown from 'react-bootstrap/Dropdown';

import { useGlobalContext } from '../../Context/appContext';

const FitlterMultiSelect = (props) => {
  const { name, handleLocationFilter } = props;
  const { state, requestOption, setRequestOption } = useGlobalContext();
  let chekingIfLocationExist = [];
  const [selectedLocation, setSelectedLocation] = useState([]);
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    setLocations(state.map((el) => ({ ...el, checked: false })));
  }, [state]);

  const handleLocationClick = (locationIndex, loc) => {
    const locationClone = [...locations];
    locationClone[locationIndex].checked =
      !locationClone[locationIndex].checked;
    setLocations(locationClone);
    if (selectedLocation.includes(loc)) {
      const temLocation = selectedLocation.filter((item) => item !== loc);
      setRequestOption({ ...requestOption, locations: temLocation });
      setSelectedLocation(temLocation);
    } else {
      setRequestOption({
        ...requestOption,
        locations: [...selectedLocation, loc],
      });
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
          {locations.map((loc, index) => {
            if (!chekingIfLocationExist.includes(loc.location)) {
              chekingIfLocationExist.push(loc.location);
              return (
                <Dropdown.Item
                  key={index}
                  as="button"
                  onClick={() => {
                    handleLocationClick(index, loc.location);
                  }}
                >
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className={styles.customControlInput}
                      id="defaultUnchecked"
                      checked={loc.checked}
                      onChange={() => {}}
                    />
                    {loc.location}
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
