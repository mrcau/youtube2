import React from 'react';
import style from './detail.module.css';

const Detail = ({video}) => (
  <h1>{video.snippet.title}</h1>
  );

export default Detail;