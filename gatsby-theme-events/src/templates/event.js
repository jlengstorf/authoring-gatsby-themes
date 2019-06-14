import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Event from '../components/event';

export const query = graphql`
  query($eventID: String!) {
    event(id: { eq: $eventID }) {
      name
      url
      start_date(formatString: "MMMM D, YYYY")
      end_date(formatString: "MMMM D, YYYY")
      location
      fields {
        slug
      }
    }
  }
`;

const EventTemplate = ({ data: { event } }) => (
  <Layout>
    <Event
      name={event.name}
      url={event.url}
      startDate={event.start_date}
      endDate={event.end_date}
      location={event.location}
      slug={event.fields.slug}
    />
  </Layout>
);

export default EventTemplate;
