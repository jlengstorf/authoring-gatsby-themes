import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Event from '../components/event';

export const query = graphql`
  query($eventID: String!) {
    event(id: { eq: $eventID }) {
      name
      url
      startDate(formatString: "MMMM D, YYYY")
      endDate(formatString: "MMMM D, YYYY")
      location
      slug
    }
  }
`;

const EventTemplate = ({ data: { event } }) => (
  <Layout>
    <Event
      name={event.name}
      url={event.url}
      startDate={event.startDate}
      endDate={event.endDate}
      location={event.location}
      slug={event.slug}
    />
  </Layout>
);

export default EventTemplate;
