import React from 'react';
import SocialEventCard from './SocialEventCard';

function SocialEventList({ events }) {
  return (
    <div>
      {events.map((event) => (
        <SocialEventCard key={event.id} event={event} />
      ))}
    </div>
  );
}

export default SocialEventList;
