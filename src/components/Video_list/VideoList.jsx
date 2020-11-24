import React from 'react'
import VideoItem from '../Video_item/VideoItem'

function VideoList(pr) {
  const Videos = pr.Videos;
  return (
    <div>
         {/* {Videos.map(video=><VideoItem video={video}/>        )} */}
      {Videos.map((video) => { return (
        <VideoItem key={video.id} video={video}/>)
      })}
    </div>
  )
}

export default VideoList