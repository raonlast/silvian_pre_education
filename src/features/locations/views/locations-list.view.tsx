import {Box, Column, Columns, Row, Rows, Stack, Tiles} from '@mobily/stacks';
import React from 'react';
import {Image, ScrollView, StyleSheet, Text} from 'react-native';
import {Location} from '../../../graphql/types';
import {ColorType} from '../types/color-tiles.type';
import ColorTile from './color-tile.view';

interface ILocationsListViewProps {
  locations: Location[];
  colors: ColorType[];
}

export const LocationsListView = ({
  locations,
  colors,
}: ILocationsListViewProps) => {
  return (
    <ScrollView>
      <Stack space={4} paddingX={4} paddingTop={2}>
        {locations.map(location => (
          <Box key={location.id} style={styles.card}>
            <Columns alignX="between" alignY="center" padding={4}>
              <Column>
                <Image
                  source={{uri: location.photo}}
                  style={styles.image}
                  resizeMode="cover"
                />
              </Column>
              <Column>
                <Rows space={8} alignY="between">
                  <Row height="content">
                    <Text>{location.name}</Text>
                  </Row>
                  <Row height="content">
                    <Text numberOfLines={3}>{location.description}</Text>
                  </Row>
                </Rows>
              </Column>
            </Columns>
          </Box>
        ))}
        <Tiles columns={4} space={2}>
          {colors.map((color, index) => (
            <ColorTile key={index} color={color} />
          ))}
        </Tiles>
      </Stack>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginBottom: 8,
  },
  card: {
    backgroundColor: '#F9F9F9',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#CCCCCC',
  },
});
