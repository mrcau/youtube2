import React, { useEffect, useState } from 'react'
import './App.css';
import SerchHeader from './components/SerchHeader/SerchHeader';
import Detail from './components/video_detail/Detail';
import VideoList from './components/Video_list/VideoList';

function App({Youtube}) {
  const [Videos, setVideos] = useState([]);
  const [selectVideo, setSelectVideo] = useState(null);

  useEffect(() => {
    Youtube.search().then(items => setVideos(items));
  }, []);
  
  // Q쿼리가 들어오면 API값을 받아오는 함수 (검색)
  const onSearch = (query) => {
    Youtube.onSearch(query).then(items => setVideos(items));
  }
  
  return (
    <div className="App">
      <SerchHeader onSearch={onSearch} / >
        {/* 위에 정의한 search 함수를 프롭스로 SerchHeader에 보내기(변수 뿐만아니라 함수도 보낼수있다) */}

      {selectVideo && <Detail video={selectVideo}/>}

      <VideoList Videos={Videos} /> 
      {/* Videos 스테이트 변수 VideoList 컴포넌트에 보내기 */}
    </div>
  );
}

export default App;
