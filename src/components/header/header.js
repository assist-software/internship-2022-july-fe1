import React from 'react'

import Form from 'react-bootstrap/Form';
import img from '../../assets/images/assistLogo.png'
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/esm/Button';
import { FiHeart, FiUser, FiSearch } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import '../../App.css';

// import { useGlobalContext } from '../../Context/appContext';

const Header = () => {
    // const { setSearchValue } = useGlobalContext()

    // const [searchValue, setSearchValue] = useState('')

    // const handleSearch = (e) => {
    //     setInterval(() => {
    //         console.log('This will run every second!', searchValue);
    //     }, 1000);
    // }


    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         console.log('This will run every second!', searchValue);
    //     }, 1000);
    //     return () => clearInterval(interval);
    // }, []);



    return (
        <div className='headerComponent'>
            <div className='container' >
                <img src={img} alt="Assist Logo" className='headerLogo' />
                <Form className='searchForm'>
                    <Dropdown className='dropDownBtn' title='Category'>
                        <Dropdown.Toggle variant="default"><span className='textCategory'>Category </span></Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="/category/latest">Latest</Dropdown.Item>
                            <Dropdown.Item href="/category/big">Big houses</Dropdown.Item>
                            <Dropdown.Item href="/category/small">Small houses</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Control
                        // onChange={(e) => setSearchValue(e.target.value)}
                        className="searchInput"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                    />
                    <Button variant="outline" className='btnSearchIcon'>
                        <FiSearch className='searchIcon'></FiSearch>
                    </Button>
                    <Button variant="outline" className='favouritesBtn'>
                        <FiHeart id='headerIcons'></FiHeart>
                        <Link to={"/favourites"} className='ColorText' >Favourites</Link>
                    </Button>
                    <Button variant="outline" className='userBtn'>
                        <FiUser id='headerIcons'></FiUser>
                        <Link to={"/login"} className='ColorTextd'>My account</Link>
                    </Button>
                </Form>
            </div>
        </div>
    )
}

//             <FiSearch className="searchIcon"></FiSearch>
//             <Button variant="outline" className="favouritesBtn shadow-none">
//               <FiHeart id="headerIcons"></FiHeart>
//               <Link to={"/favourites"} className="ColorText">
//                 Favourites
//               </Link>
//             </Button>
//             <Button variant="outline" className="userBtn">
//               <FiUser id="headerIcons"></FiUser>
//               <Link to={"/login"} className="ColorTextd">
//                 My account
//               </Link>
//             </Button>
//           </Nav>
//         </Navbar.Collapse>
//         {/* </Container> */}
//       </Navbar>
//     </div>
//   );
// };

export default Header;
