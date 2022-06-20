import {
  View,
  Easing,
  Animated,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {useRef, useEffect, useState} from 'react';
import pokeball from './../asset/images/pokeball-2.png';
import {ms} from 'react-native-size-matters';
export default function Animation() {
  const animate = useRef(new Animated.Value(0)).current;

  const startAnimation = () => {
    Animated.sequence(
      [
        Animated.timing(animate, {
          toValue: 1,
          duration: 750,
          useNativeDriver: true,
        }),
        Animated.delay(300),
      ],
      {useNativeDriver: true},
    ).start(() => {
      animate.setValue(0);
      startAnimation();
    });
  };

  const rotateInterpolation = animate.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  useEffect(() => {
    startAnimation();
  });

  return (
    <View style={styles.container}>
      <Animated.Image
        source={pokeball}
        style={[styles.box, {transform: [{rotate: rotateInterpolation}]}]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#455a64',
  },
  box: {
    width: ms(100),
    height: ms(100),
  },
  button: {
    backgroundColor: 'blue',
    padding: ms(10),
    margin: ms(10),
    borderRadius: ms(10),
  },
  buttonText: {
    color: 'white',
    fontSize: ms(20),
    textAlign: 'center',
  },
});
