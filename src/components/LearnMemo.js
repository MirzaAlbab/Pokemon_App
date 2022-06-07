import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useMemo} from 'react';

export default function LearnMemo() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  const themeStyles = {
    backgroundColor: dark ? 'black' : 'white',
    color: dark ? 'white' : 'black',
  };

  const slowFunction = num => {
    console.log('slowFunction');
    // for (let i = 0; i < 100000000; i++) {}
    return num * 2;
  };

  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);
  return (
    <>
      <TextInput
        value={number}
        keyboardType="numeric"
        onChangeText={e => setNumber(parseInt(e))}
      />
      <TouchableOpacity onPress={() => setDark(!dark)}>
        <Text>change theme</Text>
      </TouchableOpacity>
      <View style={[styles.container, themeStyles]}>
        <Text>{doubleNumber}</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({});
