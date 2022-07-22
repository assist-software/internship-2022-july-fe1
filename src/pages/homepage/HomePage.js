import SingleItem from '../../components/SingleItem/SingleItem';

import React from 'react';
// import ContentContainer from '../../components/ContentContainer/ContentContainer';

const HomePage = () => {
  return (
    <div>
      <SingleItem />
      {/* <ContentContainer /> */}
    </div>
    // when test uncomment
    // <Card onClick={() => console.log('tste')} isFavorite={true} />
  );
};
export default HomePage;
