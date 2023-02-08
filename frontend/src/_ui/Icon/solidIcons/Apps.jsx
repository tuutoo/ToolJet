import React from 'react';

const Apps = ({ style = {}, fill = '#000', width = '25', className = '', viewBox = '0 0 25 25' }) => (
  <svg width={width} height={width} viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.5 6.78906C4.5 5.68449 5.39543 4.78906 6.5 4.78906H8.5C9.60457 4.78906 10.5 5.68449 10.5 6.78906V8.78906C10.5 9.89363 9.60457 10.7891 8.5 10.7891H6.5C5.39543 10.7891 4.5 9.89363 4.5 8.78906V6.78906ZM16.5 4.78906C15.3954 4.78906 14.5 5.68449 14.5 6.78906V8.78906C14.5 9.89363 15.3954 10.7891 16.5 10.7891H18.5C19.6046 10.7891 20.5 9.89363 20.5 8.78906V6.78906C20.5 5.68449 19.6046 4.78906 18.5 4.78906H16.5ZM17.5 20.7891C19.1569 20.7891 20.5 19.4459 20.5 17.7891C20.5 16.1322 19.1569 14.7891 17.5 14.7891C15.8431 14.7891 14.5 16.1322 14.5 17.7891C14.5 19.4459 15.8431 20.7891 17.5 20.7891ZM6.5 14.7891C5.39543 14.7891 4.5 15.6845 4.5 16.7891V18.7891C4.5 19.8936 5.39543 20.7891 6.5 20.7891H8.5C9.60457 20.7891 10.5 19.8936 10.5 18.7891V16.7891C10.5 15.6845 9.60457 14.7891 8.5 14.7891H6.5Z"
      fill={fill}
    />
  </svg>
);

export default Apps;
