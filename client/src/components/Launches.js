import React, { Component, Fragment } from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import LaunchItem from './LaunchItem';
import MissionKey from './MissionKey';

const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_date_local
      launch_success
    }
  }
`;

const Launches = () => {
  const { loading, error, data } = useQuery(LAUNCHES_QUERY, {
    variables: { language: 'english' },
  });
  let content;
  if (loading) {
    content = <h4>Loading...</h4>;
  } else if (error) {
    console.log('Error: ', error);
  } else if (data) {
    content = <Fragment>
      <MissionKey />
      {
        data.launches.map((launch) => (
          <LaunchItem key={launch.flight_number} launch={launch} />
        ))
      }
    </Fragment>
  }
  return <div>
    <h1 className="display-4 my-3">Launches</h1>
    {content}
  </div>
};

export default Launches
