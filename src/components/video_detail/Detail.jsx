import React from 'react';
import style from './detail.module.css';

const Detail = ({ video }) => {
  return (
    <section className={style.detail}>
      <iframe
        className={style.iframe}
        id="ytplayer"
        type="text/html"
        width="100%"
        title="my video"
        height="500px"
        src={`https://www.youtube.com/embed/${video.id.videoId}`}
        frameBorder="0"
        allowFullScreen>
      </iframe>
      <h2>{video.snippet.title}</h2>
      <h3>{video.snippet.channelTitle}</h3>
      <pre>{video.snippet.description}</pre>
    </section>
  );
}
export default Detail;