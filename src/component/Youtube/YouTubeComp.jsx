import React from 'react';
import './youTubeComp.css'
const YouTubeComp =(props)=>{
    return(
      <div className="youtube-wrapper">
        <div className="img-thumb">
          <img src="https://www.jpnn.com/timthumb.php?src=https://photo.jpnn.com/arsip/watermark/2019/10/11/prabowo-subianto-dan-joko-widodo-foto-ricardojpnncom-14.jpg&w=600&h=375&zc=1&q=70" atl=""/>
        <p className="time">12:09</p>
        </div>
        <p className="title">{props.name}</p>
        <p className="desc">{props.name}</p>
        
        
      </div> 
    )
    
}
YouTubeComp.defaultProps={
  name :'Ganteng'
}
export default YouTubeComp;