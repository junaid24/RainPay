import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';

import Slider from '@react-native-community/slider';

const width = Dimensions.get('window').width;

const SliderText = props => {
  const maximumValue = props.maximumValue || 1;
  const stepValue = props.stepValue || 1;
  const value = props.value || 0;
  const [sliderValue, setSliderValue] = useState(props.sliderValue || 0.00);

  const sendSliderValue = slider => {
    setSliderValue(slider);
    props.onValueChange(slider);
  };

  return (
    <View style={[styles.slider, props.containerStyle]}>
      <Text style={styles.dollar}>$</Text>
      <Text style={[styles.text, props.customCountStyle]}>{sliderValue}</Text>
      {/* </View> */}
      <Slider
        style={[styles.slider, props.sliderStyle]}
        minimumValue={props.minimumValue || 0}
        maximumValue={maximumValue}
        step={stepValue}
        minimumTrackTintColor={props.minimumTrackTintColor || '#000000'}
        thumbTintColor={props.thumbTintColor || '#000000'}
        maximumTrackTintColor={props.maximumTrackTintColor || '#e3e3e3'}
        onValueChange={e => sendSliderValue(e)}
        onSlidingComplete={props.onSlidingComplete}
        value={value}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  dollar: {
    position: 'absolute',
    width: 10,
    height: 20,
    marginTop: 30,
    marginLeft: 26,
    fontFamily: 'UniversalSans-500',
    fontSize: 16,
    fontWeight: '900',
    color: '#7D819C',
    lineHeight: 24,
  },
  text: {
    position: 'absolute',
    width: 137,
    height: 64,
    marginTop: 20,
    marginBottom: 400,
    marginLeft: 43,
    fontFamily: 'UniversalSans-900',
    fontSize: 48,
    fontWeight: '900',
    color: '#2F3355',
    lineHeight: 64,
  },
  slider: {
    width: width - 20,
    marginTop: 90,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  customLabel: {
    fontSize: 20,
  },
});

export default SliderText;
