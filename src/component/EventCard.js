import './EventCard.css';
import React from 'react';
import { NavLink } from 'react-router-dom';
const EventCard = (props) => {
    return (
        <div className="Event-card">
            <img src={props.imgsrc} alt="img"></img>
            <h2 className="Event-title">{props.title}</h2>
            <div className="Event-Details">
                <p>{props.Eventinformation}</p>
                <p>{props.EventDetails}</p>
                <p>{props.venue}</p>
                <div className="pro-btns">
                    <NavLink to = "/UserDetails" className="butns">Register</NavLink>
                </div>
            </div>
        </div>
    )
}
export default EventCard;