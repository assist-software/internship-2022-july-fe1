import { HeaderElement, ContainerElement, DropdownElement, SearchElement, FavoriteBtnElement, LabelElement, UserElement, SearchComponentElement, FavouritesIcon } from './HomePageElements'
import AssistLogo from '../../components/AssistLogo'
import FormLabel from '../../components/FormLabel'
import AssistLogoHeader from '../../components/AssistLogoHeader'
import { FiChevronDown, FiHeart, FiUser, FiSearch } from 'react-icons/fi'
import { TxtLabel } from '../../components/TxtLabel'
import Header from '../../components/header/header'

const HomePage = () => {
  return (
    <Header />

    // when test uncomment 
    // <Card onClick={() => console.log('tste')} isFavorite={true} />
  )
}
export default HomePage;
