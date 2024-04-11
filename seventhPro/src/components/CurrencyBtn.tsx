import React from 'react';
import type {PropsWithChildren} from 'react';
import {StyleSheet, Text, View} from 'react-native';

type CurrencyBtnProps = PropsWithChildren<{
  name: string;
  flag: string;
  value: number;
  symbol: string;
}>;

const CurrencyBtn = (props: CurrencyBtnProps): JSX.Element => {
  return (
    <View style={styles.buttonContainer}>
      <Text style={styles.flag}>{props.flag}</Text>
      <Text style={styles.country}>{props.name}</Text>
    </View>
  );
};

export default CurrencyBtn;

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
  },
  flag: {
    fontSize: 22,
    color: '#FFFFFF',
    marginBottom: 4,
  },
  country: {
    fontSize: 15,
    color: '#2d3436',
  },
});
