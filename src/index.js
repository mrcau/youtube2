import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Youtube from './service/Youtube';
const youtube = new Youtube(process.env.REACT_APP_YOUTUBE_API_KEY);

ReactDOM.render(
  <React.StrictMode>
    <App Youtube={youtube}/>
  </React.StrictMode>,
  document.getElementById('root')
);