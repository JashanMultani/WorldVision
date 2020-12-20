import React from 'react'
import './Card.css'
import FetchData from "./FetchData";

function Card({title, imageLatestUrl, body}) {
    return (
        <div className='flex-container'>
            <div className="image-container">
                <img src={imageLatestUrl} alt=''/>
            </div>
            <div className="card-content">
            <div className="card-title">
                <h3>{title}</h3>
            </div>
            <div className="card-body">
                <p>{body}</p>
            </div>
            </div>

            <div className="image-container">
                <img src={imageLatestUrl} alt=''/>
            </div>
            <div className="card-content">
            <div className="card-title">
                <h3>{title}</h3>
            </div>
            <div className="card-body">
                <p>{body}</p>
            </div>
            </div>
            <div className="image-container">
                <img src={imageLatestUrl} alt=''/>
            </div>
            <div className="card-content">
            <div className="card-title">
                <h3>{title}</h3>
            </div>
            <div className="card-body">
                <p>{body}</p>
            </div>
            </div>
            
            
            
            
        </div>
        
    )
}

export default Card