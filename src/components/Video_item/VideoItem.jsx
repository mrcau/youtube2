import React,{memo} from 'react';
import style from './VideoItem.module.css';

const VideoItem = memo(({ video, selvideo, display }) => {
  const displayType= display==='list'? style.list : style.grid;
  return (
    <div className={`${style.container} ${displayType}` } onClick={() => { selvideo(video) }}>

      <div className={style.video}>
        <img className={style.thumbnail} src={video.snippet.thumbnails.medium.url} />
        <div className={style.metadata}>
          <h4 className={style.title} >{video.snippet.title}</h4>
          <p className={style.channel} >{video.snippet.channelTitle}</p>
        </div>
      </div>

    </div>
  );
  })
export default VideoItem