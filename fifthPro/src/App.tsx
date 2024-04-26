import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

export default function App(): JSX.Element {
  const [randomBg, setRandomBg] = useState('#ffffff');
  const [randomShCol, setRandomShCol] = useState('#000000');

  const generateColor = () => {
    let hexRange = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
      color += hexRange[Math.floor(Math.random() * 16)];
    }
    setRandomBg(color);
  };

  const generateColorforShape = () => {
    let hexRange = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
      color += hexRange[Math.floor(Math.random() * 16)];
    }
    setRandomShCol(color);
  };

  return (
    <>
      <StatusBar backgroundColor="#000000" />
      <View style={[styles.container, {backgroundColor: randomBg}]}>
        <View style={styles.shapeContainer}>
          <View style={[styles.square, {backgroundColor: randomShCol}]} />
          <View style={[styles.circle, {backgroundColor: randomShCol}]} />
          <View style={[styles.triangle, {borderBottomColor: randomShCol}]} />
          <View style={[styles.diamond, {backgroundColor: randomShCol}]} />
        </View>

        <TouchableOpacity
          style={styles.actionBtn}
          onPress={() => {
            generateColor();
            generateColorforShape();
          }}>
          <Text style={styles.actionBtnTxt}>Press Me</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  shapeContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginVertical: 20,
  },
  actionBtn: {
    backgroundColor: '#6A1B4D',
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 40,
  },
  actionBtnTxt: {
    fontSize: 22,
    color: '#ffffff',
    textTransform: 'uppercase',
  },
  square: {
    width: 100,
    height: 100,
    backgroundColor: '#6A1B4D',
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    backgroundColor: 'red',
    marginHorizontal: 8,
  },
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 50,
    borderRightWidth: 50,
    borderBottomWidth: 100,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
  },
  diamond: {
    width: 70,
    height: 70,

    transform: [{rotate: '45deg'}],
    marginTop: 40,
  },
});
