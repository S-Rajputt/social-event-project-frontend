import './EventCard.css';
import React from 'react';
import { NavLink } from 'react-router-dom';
import EventCard from './EventCard';
import SocialEventCard from "./SocialEventCard";
function Event() {
  return (<>
    <div className="work-Container">
      <h1 className="Event-heading">Events</h1>
      <div className="Event-Container">
        {SocialEventCard.map((val, ind) => {
          return (
            <EventCard
              key={ind}
              imgsrc={val.imgsrc}
              title={val.title}
              Eventinformation={val.Eventinformation}
              Eventdetails={val.EventDetails}
              venue={val.venue}
             />
          );
        })}
      </div>
    </div>
    </>
  );
}
export default Event;