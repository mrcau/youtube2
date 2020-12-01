import React from 'react'
import style from './VideoItem.module.css';

const VideoItem = ({video, selvideo}) => 
   (
    <div className={style.container} onClick={ () => {
      selvideo(video)
    }}>
       
      <div className={style.video}>
        <img className={style.thumbnail} src={video.snippet.thumbnails.medium.url}/>
        <div className={style.metadata}>
          <h4 className={style.title} >{video.snippet.title}</h4>
          <p className={style.channel} >{video.snippet.channelTitle}</p>
        </div>
      </div>
    
    </div>
  );

export default VideoItem