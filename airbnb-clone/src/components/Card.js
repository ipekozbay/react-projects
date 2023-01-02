import React from "react";

export default function Card(props){
    
    return(
        <div className="card">
            <img src="../images/katie-zaferes.png" className="card--image"/>
            <div className="card--stats">
                <img src="../images/star.png" className="card--star"/> 
                <span className="gray">{props.rating}</span>
                <span className="gray">{props.reviewCount}</span>
                <span> . {props.country}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From {props.price}</span></p>
        </div>
    )
} 

