import React from 'react';
import './StafeFull.css';
class StateFull extends React.Component{
    render(){
        return <div className="card">
        <p className="title">props.name</p>
        <p>props.jo</p>
      </div> 
    }
}

export default StateFull;