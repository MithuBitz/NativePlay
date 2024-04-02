import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

export default function ActionCard() {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <View style={styles.headerContent}>
          <Text style={styles.headerTitle}>About Assam Tea</Text>
        </View>
        <Image
          source={{
            uri: 'https://images.pexels.com/photos/20859283/pexels-photo-20859283/free-photo-of-shivadol.jpeg',
          }}
          style={styles.cardImage}
        />
        <View style={styles.bodyContainer}>
          <Text numberOfLines={3}>
            Assam tea is a black tea named after Assam, India, the region of its
            production. It is manufactured specifically from the plant Camellia
            sinensis var. assamica (Masters).The Assam tea plant is indigenous
            to Assam—initial efforts to plant the Chinese varieties in Assam
            soil did not succeed.Assam tea is now mostly grown at or near sea
            level and is known for its body, briskness, malty flavour, and
            strong, bright colour.
          </Text>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity
            onPress={() => {
              openWebsite('https://en.wikipedia.org/wiki/Assam_tea');
            }}>
            <Text style={styles.socialLinks}>Read More..</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              openWebsite('https://www.facebook.com/mtz.brtamuly');
            }}>
            <Text style={styles.socialLinks}>Follow me</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 22,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  card: {
    height: 350,
    width: 320,
    borderRadius: 5,
    marginHorizontal: 16,
    marginVertical: 12,
  },
  cardElevated: {
    backgroundColor: '#586776',
    elevation: 3,
    shadowOffset: {
      height: 1,
      width: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.4,
  },
  headerContent: {
    height: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    color: '#000000',
    fontSize: 14,
    fontWeight: '700',
  },
  cardImage: {
    height: 190,
  },
  bodyContainer: {
    padding: 8,
  },
  footerContainer: {
    padding: 6,
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-evenly',
  },
  socialLinks: {
    fontSize: 16,
    color: '#000000',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 5,
  },
});
