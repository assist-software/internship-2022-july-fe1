import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import styles from './Paginate.module.css';
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from 'react-icons/md';

import { useGlobalContext } from '../../Context/appContext';

const Paginate = () => {
  const { requestOption, setRequestOption, state } = useGlobalContext();
  const [pageCount, setPageCount] = useState(1);

  useEffect(() => {
    // CALCULATE TOTAL CARDS
    // setPageCount(Math.ceil(state[0].totalListings / 12));
    const x = state[0]
      ? setPageCount(Math.ceil(state[0].totalListings / 12))
      : 1;
    console.log(x);
  }, [state]);

  const handlePageClick = (data) => {
    let currentPage = data.selected + 1;
    setRequestOption({ ...requestOption, pageIndex: currentPage });
  };

  return (
    <>
      <ReactPaginate
        previousLabel={<MdOutlineKeyboardArrowLeft />}
        nextLabel={<MdOutlineKeyboardArrowRight />}
        breakLabel={'...'}
        // pageCount={pageCount}
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
