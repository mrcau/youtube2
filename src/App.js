import React, { useEffect, useState } from 'react'
import SerchHeader from './components/SerchHeader/SerchHeader';
import Detail from './components/video_detail/Detail';
import VideoList from './components/Video_list/VideoList';
import style from './App.module.css';

function App({Youtube}) {
  const [Videos, setVideos] = useState([]);
  const [selectVideo, setSelectVideo] = useState(null);
  
  const selvideo = (video) => {
    setSelectVideo(video);
  }

  useEffect(() => {
    Youtube.search().then(items => setVideos(items));
  }, []);
  
  // Q쿼리가 들어오면 API값을 받아오는 함수 (검색)
  const onSearch = (query) => {
    Youtube.onSearch(query).then(items => setVideos(items));
  }
  
  return (
    <div className={style.App}>
      <SerchHeader onSearch={onSearch} / >
        {/* 위에 정의한 search 함수를 프롭스로 SerchHeader에 보내기(변수 뿐만아니라 함수도 보낼수있다) */}
      <section className={style.content}>

        <div className={style.detail}> 
        {selectVideo && <Detail video={selectVideo}/>}
        {/* selectvideo가 있으면 deltail 컴포넌트 보여주기  */}
        </div>

      <div className={style.videoList}>
        <VideoList Videos={Videos} selvideo={selvideo} /> 
        {/* Videos 스테이트 변수 VideoList 컴포넌트에 보내기 */}
        </div>

      </section>
    </div>
  );
}

export default App;
