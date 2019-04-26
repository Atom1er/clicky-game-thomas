import React, { Component } from 'react';
import "./image.css";
import Bootstrap from "../../node_modules/bootstrap/dist/css/bootstrap.css";


function ImagesCard(props){
    return (
    <div className="image-card">
        <img className="image" 
        alt={props.name} 
        src={props.image} 
        data-id={props.id}
        onClick = {()=> { props.onEcrement(props.id)}}
        onShuffle
        />
    </div>
    );
}

export default ImagesCard;