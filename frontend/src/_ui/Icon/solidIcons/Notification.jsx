import React from 'react';

const Notification = ({ style = {}, fill = '#C1C8CD', width = '25', className = '', viewBox = '0 0 25 25' }) => (
  <svg width={width} height={width} viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.2772 18.7891H6.72281C4.89443 18.7891 3.85076 16.9499 4.94779 15.6612C5.43344 15.0907 5.73274 14.4139 5.81328 13.7043L6.26046 9.76425C6.5016 7.6397 8.08766 5.89625 10.2301 5.16272V5.05901C10.2301 3.80535 11.2463 2.78906 12.5 2.78906C13.7537 2.78906 14.7699 3.80535 14.7699 5.05901V5.16272C16.9123 5.89625 18.4984 7.6397 18.7395 9.76425L19.1867 13.7043C19.2673 14.4139 19.5666 15.0907 20.0522 15.6612C21.1492 16.9499 20.1056 18.7891 18.2772 18.7891ZM15.4721 20.8606C15.0147 21.9883 13.8565 22.7891 12.5 22.7891C11.1435 22.7891 9.98526 21.9883 9.52789 20.8606C9.50883 20.8135 9.5 20.7631 9.5 20.7123C9.5 20.4786 9.68951 20.2891 9.92329 20.2891H15.0767C15.3105 20.2891 15.5 20.4786 15.5 20.7123C15.5 20.7631 15.4912 20.8135 15.4721 20.8606Z"
      fill={fill}
    />
  </svg>
);

export default Notification;
