import React, {useEffect, useState} from 'react';
import {useQuery} from '@apollo/client';
import {LOCATIONS_QUERY} from '../graphql/locations.gql';
import {Location} from '../../../graphql/types';
import {LocationsListView} from '../views/locations-list.view';
import {ColorTileEnum} from '../types/color-tiles.type';

export const LocationListViewController = () => {
  const colors = [
    ColorTileEnum.RED,
    ColorTileEnum.BLUE,
    ColorTileEnum.YELLOW,
    ColorTileEnum.BLACK,
  ];

  const [locations, setLocations] = useState<Location[]>([]);

  const {refetch} = useQuery(LOCATIONS_QUERY, {
    onCompleted: data => {
      setLocations([...data.locations]);
    },
  });

  useEffect(() => {
    if (locations.length > 0) {
      console.log(locations[0].description);
    }
  }, [locations]);

  return <LocationsListView colors={colors} locations={locations} />;
};
