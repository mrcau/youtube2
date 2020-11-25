import React from 'react'
import VideoItem from '../Video_item/VideoItem'
import style from './VideoList.module.css'
function VideoList(pr) {
  const Videos = pr.Videos;
  return (
    <div className={style.videos}>
      {Videos.map(e=> <VideoItem video={e}/> )}
    </div>
  )
}

export default VideoList