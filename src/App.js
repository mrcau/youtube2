import React, { useEffect, useState } from 'react'
import './App.css';
import SerchHeader from './components/SerchHeader/SerchHeader';
import VideoList from './components/Video_list/VideoList';

function App(youtube) {
  const [Videos, setVideos] = useState([]);
  const apikey = process.env.REACT_APP_YOUTUBE_API_KEY;
  // Q쿼리가 들어오면 API값을 받아오는 함수 (검색)
  const onSearch = (query) => {
    console.log(query);
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    //백틱키를 이용해서 fetch URl의 q 쿼리 값을 위에 받아온 'query'로 변경후 뒤에 &type=video 추가
    fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&key=${apikey}`, requestOptions)
    .then(response => response.json())// fecth가 정상적으로 받아지면 응답을 text로 반환.
    .then(result => setVideos(result.items)) // 콘솔에서 확인한 결과물을 state변수에 담기
    .catch(error => console.log('error', error));// 에러가 발생하면 'error'를 콘설에 출력
      
  }
  

  // 앱이 마운트 되면 자동으로 API 값을 받아오는 기능
  useEffect(() => {

    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
        //fetch URL 뒤에 붙여줄 옵션을 변수로 정의 requestOptions
    fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=bts&key=${apikey}`, requestOptions)
      .then(response => response.json())
      .then(result => setVideos(result.items)) 
      .catch(error => console.log('error', error));

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
