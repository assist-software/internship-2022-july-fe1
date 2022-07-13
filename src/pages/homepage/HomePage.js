import {
  HeaderElement,
  ContainerElement,
  DropdownElement,
  SearchElement,
  FavoriteBtnElement,
  UserElement,
} from "./HomePageElements";
import AssistLogo from "../../components/AssistLogo";
import FormLabel from "../../components/FormLabel";

const HomePage = () => {
  return (
    <>
      <HeaderElement>
        <ContainerElement className="container">
          <AssistLogo className={"headerLogo"} />
          <DropdownElement type="dropdown">
            <FormLabel text="Category" style={{ color: "#0241AE" }} />
          </DropdownElement>
          <SearchElement type="search" placeholder="Search" />
          <FavoriteBtnElement>
            <FormLabel text={"Favourites"}></FormLabel>
          </FavoriteBtnElement>
          <UserElement>
            <FormLabel text={"User"}></FormLabel>
          </UserElement>
        </ContainerElement>
      </HeaderElement>
    </>
  );
};

export default HomePage;
