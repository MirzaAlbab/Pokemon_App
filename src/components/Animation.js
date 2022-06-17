import {View, Text, Animated, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useRef, useEffect, useState} from 'react';

export default function Animation() {
  const fade = useRef(new Animated.Value(0)).current;
  const translationy = useState(new Animated.Value(0))[0];
  const translation = useRef(new Animated.Value(0)).current;

  const moveBall = () => {
    Animated.timing(translationy, {
      toValue: -100,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };

  const moveBackBall = () => {
    Animated.timing(translationy, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.box, {transform: [{translateY: translationy}]}]}
      />
      <TouchableOpacity onPress={() => moveBall()} style={styles.button}>
        <Text style={styles.buttonText}>Move me</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => moveBackBall()} style={styles.button}>
        <Text style={styles.buttonText}>Move back me</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    borderRadius: 50,
    width: 50,
    height: 50,
    backgroundColor: 'red',
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
});
