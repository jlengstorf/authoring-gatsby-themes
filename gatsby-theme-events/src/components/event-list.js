import React from 'react';
import { Link } from 'gatsby';
import { Styled } from 'theme-ui';
import useSiteMetadata from '../hooks/use-site-metadata';

const EventList = ({ events }) => {
  const meta = useSiteMetadata();

  return (
    <>
      <Styled.h1>{meta.headline}</Styled.h1>
      <Styled.ul>
        {events.map(event => (
          <Styled.li key={event.id}>
            <strong>
              <Link to={event.slug}>{event.name}</Link>
            </strong>
            <br />
            {new Date(event.startDate).toLocaleDateString('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric'
            })}{' '}
            in {event.location}
          </Styled.li>
        ))}
      </Styled.ul>
    </>
  );
};

export default EventList;
