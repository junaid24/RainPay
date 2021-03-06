import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text} from 'react-native';

import CardForm from '../components/CardForm';
import {TouchableOpacity} from 'react-native';
import styles from '../styles';

const WithdrawalScreen = ({navigation}) => {
  return (
    <ScrollView contentContainerStyle={localStyles.content}>
      <Text style={styles.title}>Add a debit card</Text>
      <Text style={styles.subtitle}>
        Link a debit card where you would like to receive your money.
      </Text>
      <CardForm navigation={navigation}/>
    </ScrollView>
  );
};
const localStyles = StyleSheet.create({
  content: {
    paddingTop: 96,
    paddingHorizontal: 36,
  },
  title: {
    fontFamily: 'Avenir-Heavy',
    color: 'black',
    fontSize: 32,
    marginBottom: 32,
  },
});
export default WithdrawalScreen;
