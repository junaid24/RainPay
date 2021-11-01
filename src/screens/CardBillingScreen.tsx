import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import SliderText from '../components/SliderText';
import styles from '../styles';

const CardBillingScreen = ({navigation}) => {
  const [sliderValue, setSliderValue] = useState(0.0);
  return (
    <View style={localStyles.container}>
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
        onPress={() => navigation.navigate('Withdrawal')}>
        <Text style={styles.TextStyle}> Continue </Text>
      </TouchableOpacity>
    </View>
  );
};

const localStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});

export default CardBillingScreen;
