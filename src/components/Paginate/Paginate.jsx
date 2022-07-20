import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import styles from './Paginate.module.css';
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from 'react-icons/md';

import Card from '../Card/Card';

import { useGlobalContext } from '../../Context/appContext';

const Paginate = () => {
  const { state, displayWide, setCurrentPageForContext } = useGlobalContext();
  const [items, setItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const cardsLimitOnThePage = 12;

  const urlAssit = `https://assist-jully-2022-be1.azurewebsites.net/api/listing/`;
  const urlExterior = `https://jsonplaceholder.typicode.com/comments?_page=$1&_limit=${cardsLimitOnThePage}`;

  // console.log(state);

  useEffect(() => {
    const getCards = async () => {
      const res = await fetch(`${urlExterior}`);
      const data = await res.json();
      //CALCULATE TOTAL CARDS
      // const total = res.headers.get('x-total-count');
      // setPageCount(Math.ceil(total / cardsLimitOnThePage));
      setItems(data);
    };

    setCurrentPageForContext(0);
    getCards();
  }, []);

  // console.log(items);

  const fetchCards = async (currentPage) => {
    // const res = await fetch(`
    // https://jsonplaceholder.typicode.com/comments?_page=${currentPage}&_limit=${cardsLimitOnThePage}
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/comments?_page=${currentPage}&_limit=${cardsLimitOnThePage}`
    );
    const data = await res.json();
    return data;
  };

  const handlePageClick = async (data) => {
    // console.log(data.selected);
    let currentPage = data.selected + 1;
    setCurrentPageForContext(currentPage);
    const cardsFromServer = await fetchCards(currentPage);
    setItems(cardsFromServer);
  };

  return (
    <>
      {/* JUST FOR TESTING */}
      <div className="row m-2">
        {items.map((item) => {
          return (
            <div
              key={item.id}
              className="col-sm-6 col-md-4 v my-2"
              style={{ height: '250px' }}
            >
              <div className="card shadow-sm w-100" style={{ minHeight: 225 }}>
                <div className="card-body">
                  <h5 className="card-title text-center h2">Id :{item.id} </h5>
                  <h6 className="card-subtitle mb-2 text-muted text-center">
                    {item.email}
                  </h6>
                  <p className="card-text">{item.body}</p>
                </div>
              </div>
            </div>
          );
        })}

        {/* <section className={!displayWide ? styles.contentContainer : null}>
          {state.map((item) => {
            return (
              <Card
                key={item.id}
                title={item.title}
                price={item.price}
                location={item.location}
                onCardClick={() => console.log('card clicked')}
                onFavoriteClick={() => console.log('fav button clicked')}
                isFavorite={item.isFavorite}
                displayWide={displayWide}
              />
            );
          })}
        </section> */}
      </div>

      <ReactPaginate
        previousLabel={<MdOutlineKeyboardArrowLeft />}
        nextLabel={<MdOutlineKeyboardArrowRight />}
        breakLabel={'...'}
        pageCount={pageCount}
        marginPagesDisplayed={1}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        //CSS
        containerClassName={styles.pagination}
        pageLinkClassName={styles.pageNumber}
        nextLinkClassName={styles.pageNumber}
        previousLinkClassName={styles.pageNumber}
        activeLinkClassName={styles.active}
        previousClassName={styles.blue}
        nextClassName={styles.blue}
        breakClassName={styles.pageNumber}
      />
    </>
  );
};

export default Paginate;
