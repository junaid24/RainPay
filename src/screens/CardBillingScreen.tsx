import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import SliderText from '../components/SliderText';

const CardBillingScreen = ({navigation}) => {
  const [sliderValue, setSliderValue] = useState(0.0);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>How much do you want to withdraw?</Text>
      <SliderText
        maximumValue={41}
        stepValue={5}
        onValueChange={(id: React.SetStateAction<number>) => setSliderValue(id)}
        sliderValue={sliderValue}
      />
      <TouchableOpacity
        style={styles.buttonContainer}
        activeOpacity={0.5}
        onPress={() => navigation.navigate('Confirmation')}>
        <Text style={styles.TextStyle}> Continue </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  title: {
    position: 'absolute',
    width: 327,
    height: 64,
    marginTop: 35,
    marginLeft: 24,
    fontFamily: 'UniversalSans-900',
    fontSize: 24,
    fontWeight: '900',
    color: '#2F3355',
    lineHeight: 32,
  },
  buttonContainer: {
    marginTop: 300,
    paddingTop: 15,
    paddingBottom: 15,
    marginLeft: 30,
    marginRight: 30,
    backgroundColor: '#3B4DCC',
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#fff',
  },

  TextStyle: {
    color: '#fff',
    textAlign: 'center',
  },
});

export default CardBillingScreen;
