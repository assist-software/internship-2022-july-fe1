import { HeaderElement, ContainerElement, DropdownElement, SearchElement, FavoriteBtnElement, LabelElement, UserElement, SearchComponentElement, FavouritesIcon} from './HomePageElements'
import AssistLogo from '../../components/AssistLogo'
import FormLabel from '../../components/FormLabel'
import AssistLogoHeader from '../../components/AssistLogoHeader'
import { FiChevronDown, FiHeart, FiUser, FiSearch } from 'react-icons/fi'
import { TxtLabel } from '../../components/TxtLabel'
import Header from '../../components/header/header'


const HomePage = () => {
  return(
    <Header />
  //   <>
  //  <HeaderElement>
  //   <ContainerElement className={"container"}>
  //     <AssistLogoHeader />
  //         <DropdownElement>    
  //           <FormLabel text='Category' style={{color:"#0241AE"}} onClick={console.log("das")} />
  //           <FiChevronDown ></FiChevronDown>
  //           </DropdownElement>
  //             <SearchElement type='search' placeholder='Search'/>
  //               <FavoriteBtnElement>
  //                 <FiHeart></FiHeart>
  //                 <FormLabel text={"Favourites"}></FormLabel>
  //               </FavoriteBtnElement>
  //                 <UserElement>             
  //                   <FiUser></FiUser>              
  //               <FormLabel text={"My account"}></FormLabel>
  //                 <FiChevronDown></FiChevronDown>
  //                   </UserElement> 
  //   </ContainerElement>
  // </HeaderElement>
  //   </>
  )
}
export default HomePage


