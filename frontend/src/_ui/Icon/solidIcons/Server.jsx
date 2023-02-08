import React from 'react';

const Server = ({ style = {}, fill = '#C1C8CD', width = '25', className = '', viewBox = '0 0 25 25' }) => (
  <svg width={width} height={width} viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M22.5 6.78906C22.5 4.57992 20.7091 2.78906 18.5 2.78906H6.5C4.29086 2.78906 2.5 4.57992 2.5 6.78906V12.0391H22.5V6.78906ZM22.5 13.5391H2.5V18.7891C2.5 20.9982 4.29086 22.7891 6.5 22.7891H18.5C20.7091 22.7891 22.5 20.9982 22.5 18.7891V13.5391ZM18.5 5.03906C18.9142 5.03906 19.25 5.37485 19.25 5.78906V7.78906C19.25 8.20328 18.9142 8.53906 18.5 8.53906C18.0858 8.53906 17.75 8.20328 17.75 7.78906V5.78906C17.75 5.37485 18.0858 5.03906 18.5 5.03906ZM15.25 5.78906C15.25 5.37485 14.9142 5.03906 14.5 5.03906C14.0858 5.03906 13.75 5.37485 13.75 5.78906V7.78906C13.75 8.20328 14.0858 8.53906 14.5 8.53906C14.9142 8.53906 15.25 8.20328 15.25 7.78906V5.78906ZM18.5 16.0391C18.9142 16.0391 19.25 16.3748 19.25 16.7891V18.7891C19.25 19.2033 18.9142 19.5391 18.5 19.5391C18.0858 19.5391 17.75 19.2033 17.75 18.7891V16.7891C17.75 16.3748 18.0858 16.0391 18.5 16.0391ZM15.25 16.7891C15.25 16.3748 14.9142 16.0391 14.5 16.0391C14.0858 16.0391 13.75 16.3748 13.75 16.7891V18.7891C13.75 19.2033 14.0858 19.5391 14.5 19.5391C14.9142 19.5391 15.25 19.2033 15.25 18.7891V16.7891Z"
      fill={fill}
    />
  </svg>
);

export default Server;
