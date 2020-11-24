import React, { useEffect, useState } from 'react'
import './App.css';
import VideoList from './components/Video_list/VideoList';

function App() {
  const [Videos, setVideos] = useState([]);

  useEffect(() => {
    //fetch URL 뒤에 붙여줄 옵션을 변수로 정의 requestOptions
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyB1-Brt9Vl_ZFtRozRbMhBp6S0E-RLmTho", requestOptions)
      .then(response => response.json()) // fecth가 정상적으로 받아지면 응답을 text로 반환.
      .then(result => setVideos(result.items)) // 콘솔에서 확인한 결과물을 state변수에 담기
      .catch(error => console.log('error', error));  // 에러가 발생하면 'error'를 콘설에 출력
  }, []);
  return (
    <div className="App">
      <VideoList Videos={Videos} />
    </div>
  );
}

export default App;
