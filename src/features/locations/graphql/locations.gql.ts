import {gql} from '@apollo/client';

export const LOCATIONS_QUERY = gql`
  query Locations {
    locations {
      description
      id
      name
      photo
    }
  }
`;
