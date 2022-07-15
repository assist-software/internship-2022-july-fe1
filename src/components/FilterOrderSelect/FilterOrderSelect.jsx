import React, { useState } from 'react'
import styles from './FilterOrderSelect.module.css'
import Dropdown from 'react-bootstrap/Dropdown';

const FilterOrderSelect = (props) => {
  const { name } = props

  const [order, setOrder] = useState('Most popular')

  // const [location, setLocation] = useState('Location');
  // const testLocation = [
  //   { label: 'Location', value: 'fruit', checked: false },
  //   { label: 'Vegetable', value: 'vegetaable', checked: false },
  //   { label: 'Meat', value: 'meat', checked: false },
  // ];

  // const [locations, setLocations] = useState(testLocation);

  const handleOrderClick = (e) => {
    setOrder(e.target.value)

    console.log('inside', order)
    //   const locationClone = [...locations];
    //   locationClone[locationIndex].checked = !locationClone[locationIndex].checked;
    //   setLocations(locationClone)
  }

  // const handleChangeLocation = (event) => {
  //   setLocation(event.target.value);
  // };

  console.log("order", order);

  const valueForOrder = [
    'Most popular', 'Price: Low to High', 'Price: High to Low', 'Featured',
  ]

  return (
    <>
      <Dropdown className={`${styles.dropDown} shadow-none`} title={name}>
        <Dropdown.Toggle variant="default"><span className={`${styles.textCategory} shadow-none ${styles.name}`}>{!name ? 'MultiSelect' : name}</span></Dropdown.Toggle>
        <Dropdown.Menu className='shadow-none' >
          <Dropdown.ItemText className={styles.name}>Order by</Dropdown.ItemText>
          {valueForOrder.map((orde, index) => (
            <Dropdown.Item key={index} as="button" onClick={() => {
              setOrder(orde)
            }}>{orde}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </>
  )
}

export default FilterOrderSelect