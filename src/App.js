import React, { useEffect, useState } from 'react'
import SerchHeader from './components/SerchHeader/SerchHeader';
import Detail from './components/video_detail/Detail';
import VideoList from './components/Video_list/VideoList';
import style from './App.module.css';

function App({ Youtube }) {
  const [Videos, setVideos] = useState([]);
  const [selectVideo, setSelectVideo] = useState(null);

  const selvideo = (video) => {
    setSelectVideo(video);
  }

  useEffect(() => {
    Youtube.search().then((items) => setVideos(items))},[Youtube]); // useEffect는 첫 마운트나 []괄호안 변수가 바뀔때 업데이트가 됨

  // Q쿼리가 들어오면 API값을 받아오는 함수 (검색)
  const onSearch = (query) => {
    setSelectVideo(null); //상세화면에서 비디오 검색이 일어나면  다시 목록으로 돌아오기

    Youtube.onSearch(query).then(items => {
      setVideos(items);
      // setSelectVideo(null); //위치에 따라 업데이트 순서가 다르게 할 수 있음.

    });
  }

  return (
    <div className={style.App}>
      <SerchHeader onSearch={onSearch} />
      {/* 위에 정의한 search 함수를 프롭스로 SerchHeader에 보내기(변수 뿐만아니라 함수도 보낼수있다) */}
      <section className={style.content}>

        {selectVideo &&
          <div className={style.detail}>
            <Detail video={selectVideo} />
            {/* selectvideo가 있으면 deltail 컴포넌트 보여주기  */}
          </div>
        }
        <div className={style.videoList}>
          <VideoList Videos={Videos} selvideo={selvideo}  display={selectVideo ? 'list' : 'grid'}/>
          {/* Videos 스테이트 변수 VideoList 컴포넌트에 보내기 */}
        </div>

      </section>
    </div>
  );
}

export default App;
