import Header from "../../components/Header/Header";
import CarouselCards from "../../components/CarouselCards/CarouselCards";

const HomePage = () => {
  return (
    <div>
      <Header />
      <CarouselCards/>
    </div>
    // when test uncomment
    // <Card onClick={() => console.log('tste')} isFavorite={true} />
  );
};
export default HomePage;
