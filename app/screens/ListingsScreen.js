import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { Screen } from '../components/Screen';
import { Card } from '../components/Card';
import { THEME } from '../theme';
import routes from '../navigatiion/routes';
import listingsApi from '../api/listings';

// const listings = [
//   {
//     id: 1,
//     title: 'Red jacket for sale',
//     price: 100,
//     image: require('../assets/jacket.jpg'),
//   },
//   {
//     id: 2,
//     title: 'Couch for sale',
//     price: 450,
//     image: require('../assets/couch.jpg'),
//   },
// ];

export function ListingsScreen({ navigation }) {
  const [listings, setListings] = useState([]);

  const loadListings = async () => {
    const response = await listingsApi.getListings();
    setListings(response.data);
  };

  useEffect(() => {
    loadListings();
  }, []);

  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => `${listing.id}`}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={'$' + item.price}
            imageUrl={item.images[0].url}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: THEME.LIGHT_GREY,
  },
});
