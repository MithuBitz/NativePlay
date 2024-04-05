import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import * as Yup from 'yup';
import {Formik} from 'formik';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

const passwordSchema = Yup.object().shape({
  passwordLength: Yup.number()
    .min(4, 'Should be min 4 charecter')
    .max(12, 'Should be max 12 charecter')
    .required('Length is required'),
});

export default function App() {
  const [password, setPassword] = useState('');
  const [isPassGenerated, setIsPassGenerated] = useState(false);

  const [lowercase, setLowercase] = useState(false);
  const [upercase, setUppercase] = useState(false);
  const [useNumbers, setUseNumbers] = useState(false);
  const [useSymbol, setUseSymbol] = useState(false);

  const generatePassword = (passwordLength: number) => {
    let charecters = '';

    const uppercaseChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChar = 'abcdefghijklmnopqrstuvwxyz';
    const numbersChar = '0123456789';
    const specialChar = '@#$%&*_+()!';

    if (lowercase) {
      charecters += lowercaseChar;
    }
    if (upercase) {
      charecters += uppercaseChar;
    }
    if (useNumbers) {
      charecters += numbersChar;
    }
    if (useSymbol) {
      charecters += specialChar;
    }

    const passwordResult = createPassword(charecters, passwordLength);

    setPassword(passwordResult);
    setIsPassGenerated(true);
  };

  const createPassword = (charecters: string, passwordLength: number) => {
    //set a variable who hold the password with empty string initialization
    let result = '';
    //use a for loop to create a password from the provided charecter useing Math.random
    for (let i = 0; i < passwordLength; i++) {
      const charecterIndex = Math.round(Math.random() * charecters.length);
      result += charecters.charAt(charecterIndex);
    }
    return result;
  };

  const resetPassword = () => {
    setPassword('');
    setIsPassGenerated(false);
    setLowercase(false);
    setUppercase(false);
    setUseNumbers(false);
    setUseSymbol(false);
  };

  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <SafeAreaView style={styles.appContainer}>
        <Text style={styles.title}>Password Generator</Text>
        <Formik
          initialValues={{
            passwordLength: '',
          }}
          validationSchema={passwordSchema}
          onSubmit={values => {
            console.log(values);
            generatePassword(+values.passwordLength);
          }}>
          {({
            values,
            errors,
            touched,
            isValid,
            handleChange,
            handleReset,
            handleSubmit,
          }) => (
            <>
              <View style={styles.inputWrapper}>
                <View style={styles.inputColumn}>
                  <Text style={styles.heading}>Password Length</Text>

                  {touched.passwordLength && errors.passwordLength && (
                    <Text style={styles.errorText}>
                      {errors.passwordLength}
                    </Text>
                  )}
                </View>
                <TextInput
                  style={styles.inputStyle}
                  value={values.passwordLength}
                  onChangeText={handleChange('passwordLength')}
                  placeholder="Ex: 8"
                  keyboardType="numeric"
                />
              </View>
              <View style={styles.inputWrapper}>
                <Text style={styles.heading}>Include Lowercase</Text>
                <BouncyCheckbox
                  disableBuiltInState
                  isChecked={lowercase}
                  onPress={() => setLowercase(!lowercase)}
                  fillColor="#29AB87"
                />
              </View>
              <View style={styles.inputWrapper}>
                <Text style={styles.heading}>Include Uppercase</Text>
                <BouncyCheckbox
                  disableBuiltInState
                  isChecked={upercase}
                  onPress={() => setUppercase(!upercase)}
                  fillColor="#FED85D"
                />
              </View>
              <View style={styles.inputWrapper}>
                <Text style={styles.heading}>Include Numbers</Text>
                <BouncyCheckbox
                  disableBuiltInState
                  isChecked={useNumbers}
                  onPress={() => setUseNumbers(!useNumbers)}
                  fillColor="#C9A0DC"
                />
              </View>
              <View style={styles.inputWrapper}>
                <Text style={styles.heading}>Include Symbols</Text>
                <BouncyCheckbox
                  disableBuiltInState
                  isChecked={useSymbol}
                  onPress={() => setUseSymbol(!useSymbol)}
                  fillColor="#FC80A5"
                />
              </View>

              <View style={styles.formActions}>
                <TouchableOpacity
                  disabled={!isValid}
                  style={styles.primaryBtn}
                  onPress={() => {
                    handleSubmit();
                  }}>
                  <Text style={styles.primaryBtnTxt}>Generate Password </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.secondaryBtn}
                  onPress={() => {
                    handleReset();
                    resetPassword();
                  }}>
                  <Text style={styles.secondaryBtnTxt}>Reset</Text>
                </TouchableOpacity>
              </View>
            </>
          )}
        </Formik>

        {isPassGenerated ? (
          <View style={[styles.card, styles.cardElevated]}>
            <Text style={styles.subTitle}>Result:</Text>
            <Text style={styles.description}>Long Press to copy</Text>
            <Text selectable={true} style={styles.generatedPassword}>
              {password}
            </Text>
          </View>
        ) : null}
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    margin: 8,
  },
  formContainer: {
    margin: 8,
    padding: 8,
  },
  title: {
    fontSize: 32,
    fontWeight: '600',
    marginBottom: 15,
  },
  subTitle: {
    fontSize: 26,
    fontWeight: '600',
    marginBottom: 2,
  },
  description: {
    color: '#758283',
    marginBottom: 8,
  },
  heading: {
    fontSize: 15,
  },
  inputWrapper: {
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  inputColumn: {
    flexDirection: 'column',
  },
  inputStyle: {
    padding: 8,
    width: '30%',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#16213e',
  },
  errorText: {
    fontSize: 12,
    color: '#ff0d10',
  },
  formActions: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  primaryBtn: {
    width: 120,
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 8,
    backgroundColor: '#5DA3FA',
  },
  primaryBtnTxt: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700',
  },
  secondaryBtn: {
    width: 120,
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 8,
    backgroundColor: '#CAD5E2',
  },
  secondaryBtnTxt: {
    textAlign: 'center',
    color: '#ff0d10',
  },
  card: {
    padding: 12,
    borderRadius: 6,
    marginHorizontal: 12,
    marginTop: 8,
  },
  cardElevated: {
    backgroundColor: '#ffffff',
    elevation: 1,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  generatedPassword: {
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 12,
    color: '#000',
  },
});
