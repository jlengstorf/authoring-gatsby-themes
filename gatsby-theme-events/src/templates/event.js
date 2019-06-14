import React from 'react';

const EventTemplate = props => <pre>{JSON.stringify(props, null, 2)}</pre>;

export default EventTemplate;
