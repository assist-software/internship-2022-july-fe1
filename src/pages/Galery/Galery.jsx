import React from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
// import styles from './Galery.module.css';

import StyledFormTitle from '../../components/FormTitle/FormTitle';
import Filter from '../../components/Filter/Filter';
import ContentContainer from '../../components/ContentContainer/ContentContainer';

const Galery = (props) => {
  let { galeryname } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const fetchDataWithFilter = () => {};

  return (
    <>
      <div className="container">
        <StyledFormTitle
          text={props.path ? props.path : galeryname}
          showButton={location.pathname === '/' ? true : false}
          func={() => navigate('/add-new')}
        ></StyledFormTitle>
        {props?.path === 'favourites' ? (
          <>
            <Filter location={false} price={false} order={false} />
          </>
        ) : (
          <>
            <Filter location={true} price={true} order={true} />
          </>
        )}

        <ContentContainer />
      </div>
    </>
  );
};

export default Galery;
