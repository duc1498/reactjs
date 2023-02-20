import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  //condistion redering
  const [isDisplay, setIsDisplay]  = useState(true)
  return (
    <div>
      {
    isDisplay ? (<img src={'https://thumbs.dreamstime.com/z/spring-nature-blossom-web-banner-header-24752960.jpg'} alt =" " />) : (<div> khi dis play = false </div>)
      }
      <button onClick ={() => setIsDisplay(!isDisplay)} >Change display</button>
  </div>
   
  )
}
export default App;
