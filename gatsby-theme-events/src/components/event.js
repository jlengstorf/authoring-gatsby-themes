import React from 'react';

const EventDate = ({ startDate, endDate }) => {
  const start = new Date(startDate);
  const end = new Date(endDate);

  return (
    <>
      <time dateTime={start.toISOString()}>
        {start.toLocaleDateString('en-US', { day: 'numeric', month: 'long' })}
      </time>
      –
      <time datetime={end.toISOString()}>
        {end.toLocaleDateString('en-US', {
          day: 'numeric',
          month: start.getMonth() !== end.getMonth() ? 'long' : undefined,
          year: 'numeric'
        })}
      </time>
    </>
  );
};

const Event = ({ name, location, url, startDate, endDate }) => (
  <div>
    <h1>
      {name} ({location})
    </h1>
    <p>
      <EventDate startDate={startDate} endDate={endDate} />
    </p>
    <p>
      Website: <a href={url}>{url}</a>
    </p>
  </div>
);

export default Event;
