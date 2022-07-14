import { HeaderElement, ContainerElement, DropdownElement, SearchElement, FavoriteBtnElement, LabelElement, UserElement, SearchComponentElement } from './HomePageElements'

import AssistLogo from '../../components/AssistLogo'
import FormLabel from '../../components/FormLabel'
import FavoriteBtn from '../../components/FavoriteBtn/FavoriteBtn'
import Card from '../../components/Card/Card'

import { useGlobalAuthContext } from '../../Context/authContext'

const HomePage = () => {
  const { cardsMock } = useGlobalAuthContext()


  return (
    <>
      <HeaderElement>
        <ContainerElement className='container'>
          <AssistLogo className={"headerLogo"} />
          <DropdownElement type='dropdown'>
            <FormLabel text='Category' style={{ color: "#0241AE" }} />
          </DropdownElement>
          <SearchElement type='search' placeholder='Search' onChange={(e) => console.log(e)} />
          <FavoriteBtnElement>
            <FormLabel text={"Favourites"}></FormLabel>
          </FavoriteBtnElement>
          <UserElement>
            <FormLabel text={"User"}></FormLabel>
          </UserElement>
        </ContainerElement>
      </HeaderElement>


      <Card onClick={() => console.log('tste')} isFavorite={true} />
    </>
  )
}

export default HomePage;