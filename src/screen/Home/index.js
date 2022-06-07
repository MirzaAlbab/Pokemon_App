import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Animation from '../../components/Animation';
import LearnCallback from '../../components/LearnCallback';
import LearnMemo from '../../components/LearnMemo';

export default function Home() {
  return (
    <View style={styles.container}>
      <Animation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});
