import Header from '../../components/Header/Header';
import SingleItem from '../../components/SingleItem/SingleItem';

const HomePage = () => {
  return (
    <div>
      <Header />
      <SingleItem />
    </div>
    // when test uncomment
    // <Card onClick={() => console.log('tste')} isFavorite={true} />
  );
};
export default HomePage;
