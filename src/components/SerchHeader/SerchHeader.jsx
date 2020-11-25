import React from 'react';
import style from './SerchHeader.module.css'

const SerchHeader = (props) => {
  const onClick = () => {
    console.log(12)
  }

  const onKeypress = () => {
    console.log(34)
  }

  return(
  <header className={style.header}>
    <div className={style.logo}>
      <img className={style.img} src="/img/you.jpg" alt=""/>
      <h1 className={style.title}>header</h1>  
    </div>
    <input className={style.input} type="serch" placeholder="Serch..." onKeyPress={onKeypress}  />
    <button type="submit" className={style.submit} onClick={onClick}> 검색</button>
  </header>
  )};

export default SerchHeader;