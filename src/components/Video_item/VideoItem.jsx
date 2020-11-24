import React from 'react'

function VideoItem(pr) {
  const video = pr.video;
  console.log(video);
  return (
    <div>
      <h1>{video.snippet.title}</h1>
      <h1>hihi</h1>
    </div>
  )
}

export default VideoItem
