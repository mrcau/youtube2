class Youtube{
  constructor(key){
    this.key = key;
    this.requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
  }

  search(){
    fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=bts&key=${apikey}`, this.requestOptions)
      .then(response => response.json())
      .then(result => setVideos(result.items)) 
      .catch(error => console.log('error', error));
  }

  onSearch (query){
    fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&key=${apikey}`, this.requestOptions)
    .then(response => response.json())// fecth가 정상적으로 받아지면 응답을 text로 반환.
    .then(result => setVideos(result.items)) // 콘솔에서 확인한 결과물을 state변수에 담기
    .catch(error => console.log('error', error));// 에러가 발생하면 'error'를 콘설에 출력
    }
  } 

  export default Youtube; 