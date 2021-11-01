import * as Yup from 'yup';

import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';

import {Formik} from 'formik';
import TextField from '../components/TextField';
import {TouchableOpacity} from 'react-native';

const initialValues = {
  cardNumber: '',
  mmyy: '',
  cvv: '',
};

const CardForm: React.FC = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiration, setExpiration] = useState('');
  const [cvv, setCvv] = useState('');
  function onSubmit() {
    console.log('form submitted');
  }
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={CreateAccountFieldsSchema}
      onSubmit={values => {
        // onPressStartSubscription(values);
      }}>
      {({
        errors,
        touched,
        isValid,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit,
        values,
      }) => (
        <View>
          <TextField
            style={styles.textField}
            value={values.cardNumber}
            label="CARD NUMBER"
            onChangeText={handleChange('cardNumber')}
          />
          {errors.cardNumber ? <Text>Invalid Card Number </Text> : null}
          <TextField
            style={styles.textField}
            label="EXPIRATION DATE"
            value={values.mmyy}
            onChangeText={handleChange('mmyy')}
          />
          {errors.cardNumber ? <Text>Invalid Expiration Date</Text> : null}
          <TextField
            style={styles.textField}
            label="CVV"
            value={values.cvv}
            onChangeText={handleChange('cvv')}
          />
          {errors.cardNumber ? <Text>Invalid CVV </Text> : null}
        </View>
      )}
    </Formik>
  );
};

export const CreateAccountFieldsSchema = Yup.object().shape({
  cardNumber: Yup.string().test(
    'length',
    'Card: Is not a valid credit card number',
    value => {
      return /^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/.test(
        value || '',
      );
    },
  ),

  mmyy: Yup.string().test(
    'length',
    'Enter a valid expiration date (MM/YY)',
    value => {
      return /^(0[1-9]|1[0-2])\/?([0-9]{2})$/.test(value || '');
    },
  ),

  cvv: Yup.string().test(
    'length',
    'Enter a valid card verification value',
    value => {
      return /^[0-9]{3,4}$/.test(value || '');
    },
  ),
});
const styles = StyleSheet.create({
  textField: {
    flex: 1,
    marginTop: 12,
  },
});
export default CardForm;
