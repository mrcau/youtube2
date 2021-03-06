import React from 'react'
import VideoItem from '../Video_item/VideoItem'
import style from './VideoList.module.css'
function VideoList({Videos, selvideo, display}) {
  return (
    <div className={style.videos}>
      {Videos.map(e=> (
      <VideoItem key={e.id} video={e} selvideo={selvideo} display={display}/>
       ))}
    </div>
  )
}

export default VideoList