import React from 'react'
import style from './VideoItem.module.css';

const VideoItem = ({video:{snippet}}) => 
   (
    <div className={style.container}>
       
      <div className={style.video}>
        <img className={style.thumbnail} src={snippet.thumbnails.medium.url}/>
        <div className={style.metadata}>
          <h4 className={style.title} >{snippet.title}</h4>
          <p className={style.channel} >{snippet.channelTitle}</p>
        </div>
      </div>
    
    </div>
  );

export default VideoItem