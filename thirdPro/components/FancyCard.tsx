import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Place</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{
            uri: 'https://images.pexels.com/photos/5707071/pexels-photo-5707071.jpeg',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Assam Tea</Text>
          <Text style={styles.cardLabel}>Assam, India</Text>
          <Text style={styles.cardDescription}>
            Assam tea is a black tea that comes from the Assam region of India.
            It's made from the leaves of the Camellia sinensis var. assamica
            plant, which is native to Assam.
          </Text>
          <Text style={styles.cardFooter}>18 min away</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  card: {
    width: 320,
    height: 350,

    marginHorizontal: 16,
    marginVertical: 12,
    borderRadius: 5,
  },
  cardElevated: {
    backgroundColor: '#FFFFFF',
    elevation: 3,
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },
  cardImage: {
    height: 180,
    marginBottom: 8,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 12,
  },
  cardTitle: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 22,
    marginBottom: 3,
  },
  cardLabel: {
    color: '#000000',
    fontSize: 18,
    marginBottom: 4,
  },
  cardDescription: {
    color: '#2C3335',
    fontSize: 14,
    marginBottom: 5,
    flexShrink: 1,
  },
  cardFooter: {
    color: '#000000',
    fontSize: 14,
  },
});
