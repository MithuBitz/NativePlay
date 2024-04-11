import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';
// import Snackbar from 'react-native-snackbar'; //It causes some error

//Custom Snackbar
import Snackbar from './components/CustomSnackbar';

import {currencyByRupee} from './constant';
import CurrencyBtn from './components/CurrencyBtn';

export default function App(): JSX.Element {
  //state to hold inputValue, resultValue, currencyValue
  const [inputValue, setInputValue] = useState('');
  const [resultValue, setResultValue] = useState('');
  const [targetCurrency, setTargetCurrency] = useState('');

  const buttonPressed = (targetValue: Currency) => {
    if (!inputValue) {
      console.log('no input value');
      return (
        <Snackbar
          message="Enter a value to convert"
          actionText="Dismiss"
          onActionPress={() => {
            // Implement the action logic here.
          }}
          duration={6000} // Customize duration
          position="bottom" // Change the position to 'top'/'bottom'
          backgroundColor="#EA7773" // Customize background color
          textColor="#000000" // Change text color
          actionTextColor="#000000" // Customize action text color
          containerStyle={{marginHorizontal: 12}} // Apply additional styling
          messageStyle={{}} // Adjust message text styling
          actionTextStyle={{}} // Customize action text styling
        />
      );
      //Below code causes error
      //   return Snackbar.show({
      //     text: 'Enter a value to convert',
      //     backgroundColor: '#EA7773',
      //     textColor: '#000000',
      //   });
    }
    const inputAmount = parseFloat(inputValue);
    if (!isNaN(inputAmount)) {
      const convertedValue = inputAmount * targetValue.value;
      const result = `${targetValue.symbol} ${convertedValue.toFixed(2)} 🤑`;
      setResultValue(result);
      setTargetCurrency(targetValue.name);
    } else {
      return (
        <Snackbar
          message="Enter a valid number to convert"
          actionText="Dismiss"
          onActionPress={() => {
            // Implement the action logic here.
          }}
          duration={6000} // Customize duration
          position="bottom" // Change the position to 'top'/'bottom'
          backgroundColor="#EA7773" // Customize background color
          textColor="#000000" // Change text color
          actionTextColor="#000000" // Customize action text color
          containerStyle={{marginHorizontal: 12}} // Apply additional styling
          messageStyle={{}} // Adjust message text styling
          actionTextStyle={{}} // Customize action text styling
        />
      );
      //Below code causes error
      // return Snackbar.show({
      //   text: 'Enter a valid number to convert',
      //   backgroundColor: '#EA7773',
      //   textColor: '#000000',
      // });
    }
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <View style={styles.rupeesContainer}>
            <Text style={styles.rupee}>₹</Text>
            <TextInput
              maxLength={14}
              value={inputValue}
              onChangeText={setInputValue}
              // clearButtonMode="always" //only for Ios
              keyboardType="number-pad"
              placeholder="Enter amount in Rupees"
            />
          </View>
          {resultValue && <Text style={styles.resultTxt}>{resultValue}</Text>}
        </View>
        <View style={styles.bottomContainer}>
          <FlatList
            numColumns={3}
            data={currencyByRupee}
            keyExtractor={item => item.name}
            renderItem={({item}) => (
              <Pressable
                style={[
                  styles.button,
                  targetCurrency === item.name && styles.selected,
                ]}
                onPress={() => buttonPressed(item)}>
                <CurrencyBtn {...item} />
              </Pressable>
            )}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '##1287A5',
  },
  topContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },

  resultTxt: {
    fontSize: 32,
    color: '#000000',
    fontWeight: '800',
  },
  rupee: {
    marginRight: 8,

    fontSize: 22,
    color: '#000000',
    fontWeight: '800',
  },
  rupeesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputAmountField: {
    height: 40,
    width: 200,
    padding: 8,
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: '#FFFFFF',
  },
  bottomContainer: {
    flex: 3,
  },
  button: {
    flex: 1,

    margin: 12,
    height: 60,

    borderRadius: 12,
    backgroundColor: '#fff',
    elevation: 2,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  selected: {
    backgroundColor: '#ffeaa7',
  },
});
