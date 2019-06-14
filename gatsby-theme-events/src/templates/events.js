import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/layout';
import EventList from '../components/event-list';

const EventsTemplate = () => {
  const data = useStaticQuery(graphql`
    query {
      allEvent(sort: { fields: start_date, order: ASC }) {
        nodes {
          id
          name
          start_date
          end_date
          location
          url
          fields {
            slug
          }
        }
      }
    }
  `);

  const events = data.allEvent.nodes.map(event => ({
    id: event.id,
    name: event.name,
    startDate: event.start_date,
    endDate: event.end_date,
    location: event.location,
    url: event.url,
    slug: event.fields.slug
  }));

  return (
    <Layout>
      <EventList events={events} />
    </Layout>
  );
};

export default EventsTemplate;
