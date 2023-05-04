import React from 'react'


export default function Card(props){

    return (
    <div className="card--container">
        <div className="image--container">
            <img 
                src={`../images/${props.item.imageUrl}`} 
                className="card--image"
            />
        </div>
        <div className="card--info--container">
        <div className="top--info">
        <span>
            <img src="../images/pin.png"    className="pin--img" />
        </span>
            <span className="country">{props.item.location}</span>
            <span>
            <a href={props.item.googleMapsUrl} >View on Google Maps</a>
            </span>
        </div>
            <h2 className="country--attraction">{props.item.title}</h2>
            <h6 className="travel--dates">{props.item.startDate} - {props.item.endDate}</h6>
            <p className="main--info">{props.item.description}</p>
        </div>
    </div>
    )
}