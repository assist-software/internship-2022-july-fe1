import React, { useState } from 'react';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import '../AutocompleteLocation/AutocompleteLocation.css';

const AutocompleteLocation = () => {
  const [address, setAddress] = useState('');
  const [coordinates, setCoordinates] = useState({
    lat: null,
    lng: null,
  });
  //   const [def, setDef] = useState('');

  const handleSelect = async (value) => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    setAddress(value);
    setCoordinates(latLng);
  };
  //   console.log(def);

  handleSelect('London');

  return (
    <div>
      <PlacesAutocomplete value={address} onChange={setAddress} onSelect={handleSelect}>
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <p>Latitude: {coordinates.lat}</p>
            <p>Longitude: {coordinates.lng}</p>
            <input {...getInputProps({ placeholder: 'Type address' })} className='inputLocation' />
            <div>
              {/* {loading ? <div>...loading</div> : null} */}
              {/* {suggestions.map((suggestion) => {
                // const style = { backgroundColor: suggestion.active ? '#41b6e6' : '#fff' };
                // return (
                //   <div {...getSuggestionItemProps(suggestion, { style })}>
                //     {suggestion.description}
                //   </div>
                // );
              })} */}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    </div>
  );
};

export default AutocompleteLocation;
