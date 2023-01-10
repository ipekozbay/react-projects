import React from "react"


export default function Card(props) {

    return (
        <div className="card">

            <div className="card--image">
                <img src={`../images/${props.imageUrl}`} className="card--image" />
            </div>

            <div className="card--content">
                <div className="location">
                    <p className="location-country">{props.location}</p>
                    <a href={props.googleMapsUrl} className="maps-url">view on google maps</a>
                </div>

                <p className="title"> {props.title} </p>
                <p className="date">{props.startDate} {props.endDate}</p>
                <p className="description">{props.description}</p>
            </div>

        </div>
    )
}