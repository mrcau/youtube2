import React, { useRef } from 'react';
import style from './SerchHeader.module.css'

const SerchHeader = ({onSearch}) => {
  
  const inputRef = useRef();



  const handleSerch = () => {
    const value = inputRef.current.value;
    if(value===''){
      return
    }
    onSearch(value);
    inputRef.current.value = '';
    inputRef.current.focus();
  }

  const onKeypress = (e) => {
    e.key==='Enter'&&handleSerch();
  }

  return(
  <header className={style.header}>
    <div className={style.logo}>
      <img className={style.img} src="/img/you.jpg" alt=""/>
      <h1 className={style.title}>header</h1>  
    </div>
    <input className={style.input} type="serch" placeholder="Serch..." onKeyPress={onKeypress} ref={inputRef} />
    <button type="submit" className={style.submit} onClick={handleSerch}> 검색</button>
  </header>
  )};

export default SerchHeader;