import React, { useEffect, useState } from 'react'
import './App.css';
import SerchHeader from './components/SerchHeader/SerchHeader';
import VideoList from './components/Video_list/VideoList';

function App() {
  const [Videos, setVideos] = useState([]);

  // Q쿼리가 들어오면 API값을 받아오는 함수
  const onSearch = (query) => {
    console.log(query);
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    //백틱키를 이용해서 fetch URl의 q 쿼리 값을 위에 받아온 'query'로 변경후 뒤에 &type=video 추가
    fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=AIzaSyB1-Brt9Vl_ZFtRozRbMhBp6S0E-RLmTho`, requestOptions)
      .then(response => response.json()) 
      .then(result => 
        result.items.map(e =>({...e,id:e.id.videoId})))
      .then(items => setVideos(items)) 
      .catch(error => console.log('error', error));
      
  }
  

  // 앱이 마운트 되면 자동으로 API 값을 받아오는 기능
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
      <SerchHeader onSearch={onSearch} / >
        {/* 위에 정의한 search 함수를 프롭스로 SerchHeader에 보내기(변수 뿐만아니라 함수도 보낼수있다) */}
      <VideoList Videos={Videos} /> 
      {/* Videos 스테이트 변수 VideoList 컴포넌트에 보내기 */}
    </div>
  );
}

export default App;
