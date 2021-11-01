import {
  Animated,
  Easing,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';

import styles from '../styles';

type Props = React.ComponentProps<typeof TextInput> & {
  label: string;
  errorText?: string | null;
};

const TextField: React.FC<Props> = props => {
  const {label, errorText, value, style, onBlur, onFocus, ...restOfProps} =
    props;
  const [isFocused, setIsFocused] = useState(false);

  const inputRef = useRef<TextInput>(null);
  const focusAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(focusAnim, {
      toValue: isFocused || !!value ? 1 : 0,
      duration: 150,
      easing: Easing.bezier(0.4, 0, 0.2, 1),
      useNativeDriver: true,
    }).start();
  }, [focusAnim, isFocused, value]);

  let color = isFocused ? '#080F9C' : '#B9C4CA';
  if (errorText) {
    color = '#B00020';
  }

  return (
    <View style={style}>
      <Text style={localStyles.formText}>{label}</Text>
      <TextInput
        ref={inputRef}
        {...restOfProps}
        value={value}
        onBlur={event => {
          setIsFocused(false);
          onBlur?.(event);
        }}
        onFocus={event => {
          setIsFocused(true);
          onFocus?.(event);
        }}
      />
      <View
        style={{
          borderBottomColor: '#7D819C',
          borderBottomWidth: 1,
        }}
      />
      <TouchableWithoutFeedback onPress={() => inputRef.current?.focus()}>
        <Animated.View
          style={[
            localStyles.labelContainer,
            {
              transform: [
                {
                  scale: focusAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [1, 0.75],
                  }),
                },
                {
                  translateY: focusAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [24, -12],
                  }),
                },
                {
                  translateX: focusAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [16, 0],
                  }),
                },
              ],
            },
          ]}
        />
      </TouchableWithoutFeedback>
      {!!errorText && <Text style={localStyles.error}>{errorText}</Text>}
    </View>
  );
};

const localStyles = StyleSheet.create({
  input: {
    marginTop: 10,
    padding: 24,
    borderWidth: 0.5,
    borderRadius: 4,
    fontFamily: 'Avenir-Medium',
    fontSize: 16,
  },
  formText: {
    marginTop: 25,
    marginLeft: 0,
  },
  labelContainer: {
    position: 'absolute',
    // paddingHorizontal: 8,
    backgroundColor: 'white',
  },
  label: {
    fontFamily: 'Avenir-Heavy',
    fontSize: 16,
  },
  error: {
    marginTop: 4,
    marginLeft: 12,
    fontSize: 12,
    color: '#B00020',
    fontFamily: 'Avenir-Medium',
  },
});

export default TextField;
