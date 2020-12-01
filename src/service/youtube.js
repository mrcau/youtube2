import SerchHeader from "../components/SerchHeader/SerchHeader";
import axios from 'axios'; 



class Youtube{
  constructor(key){
    this.apikey = key;
    this.requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
  }

  // 신형 async 문법
  async search(){
    const response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=bts&key=${this.apikey}`, this.requestOptions);
    const result = await response.json();
    return result.items;
  }

   // axios 문법
  //  async search(){
  //    const result = await axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=bts&key=${this.apikey}`);
  //    return result.items;
  // }

  // fetch 프라미스 문법
  onSearch (query){
    return  fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&key=${this.apikey}`, this.requestOptions)
    .then(response => response.json())// fecth가 정상적으로 받아지면 응답을 text로 반환.
    .then(result => result.items) // 콘솔에서 확인한 결과물을 state변수에 담기
    }
 

  } 

  

  

  export default Youtube; 