import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {ms} from 'react-native-size-matters';

export default function Logo() {
  return (
    <View style={styles.container}>
      <Image
        style={{width: ms(200), height: ms(70)}}
        source={require('../asset/images/pokeapi.png')}
      />
      <Text style={styles.logoText}>Welcome to Pokemon</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  logoText: {
    marginVertical: ms(5),
    fontSize: 18,
    color: 'rgba(255, 255, 255, 0.7)',
  },
});
