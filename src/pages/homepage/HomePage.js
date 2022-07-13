import { HeaderElement, ContainerElement, DropdownElement, SearchElement, FavoriteBtnElement, LabelElement, UserElement} from './HomePageElements'
import AssistLogo from '../../components/AssistLogo'
import { ContentContainer, MainContainer } from '../OnBoarding/LoginPageElements'

const HomePage = () => {
  return(
    <>
   <HeaderElement className='column'>
    <ContainerElement className='container'>
      <AssistLogo className='headerLogo'/>

          <DropdownElement type='dropdown' text='asd'>       
          </DropdownElement>
              <SearchElement type='search' placeholder='Search'>
              </SearchElement>
              <FavoriteBtnElement/>
              <UserElement/>
          
    </ContainerElement>
  </HeaderElement>
    </>
  )
}
export default HomePage


