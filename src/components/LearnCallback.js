import {
  StyleSheet,
  Text,
  View,
  List,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useCallback, useMemo} from 'react';

export default function LearnCallback() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  const getItems = useCallback(value => {
    return [number + value, number + 1 + value, number + 2 + value];
  });

  const Child = props => {
    console.log('Child');
    return (
      <View>
        <Text>Child component{props.status}</Text>
      </View>
    );
  };
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
      <List items={getItems()} />
    </>
  );
}

const styles = StyleSheet.create({});
