import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ContactList() {
  const contacts = [
    {
      uid: 1,
      name: 'Brahma',
      status: 'Creator of Universe ⚜',
      imageUrl:
        'https://images.pexels.com/photos/17079652/pexels-photo-17079652/free-photo-of-close-up-of-traditional-stone-god-sculpture.jpeg',
    },
    {
      uid: 2,
      name: 'Bishnu',
      status: 'Oparator of Universe 🕉',
      imageUrl:
        'https://images.pexels.com/photos/12556091/pexels-photo-12556091.jpeg',
    },
    {
      uid: 3,
      name: 'Shiv',
      status: 'Destructor of Universe 🔱',
      imageUrl:
        'https://images.pexels.com/photos/13041184/pexels-photo-13041184.jpeg',
    },
    {
      uid: 4,
      name: 'Hanuman',
      status: 'Power of all Universe 💪',
      imageUrl:
        'https://images.pexels.com/photos/13579932/pexels-photo-13579932.jpeg',
    },
  ];

  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView style={styles.container} scrollEnabled={true}>
        {contacts.map(({uid, name, status, imageUrl}) => (
          <View key={uid} style={styles.userCard}>
            <Image source={{uri: imageUrl}} style={styles.userImage} />
            <View>
              <Text style={styles.userName}>{name}</Text>
              <Text style={styles.userStatus}>{status}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  container: {
    paddingHorizontal: 16,
  },
  userCard: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    backgroundColor: '#218F76',
    borderRadius: 10,
    padding: 5,
  },
  userImage: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    marginRight: 14,
  },
  userName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
  userStatus: {
    fontSize: 12,
  },
});
