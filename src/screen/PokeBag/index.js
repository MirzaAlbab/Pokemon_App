import {Text, FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import Animation from '../../components/Animation';
import database from '@react-native-firebase/database';
import Colors from '../../helper/Colors';
import PokePic from '../../components/PokePic';

export default function Pokebag({navigation}) {
  const [pokeList, setPokeList] = useState([]);
  const {user} = useSelector(state => state.login);
  const [loading, setLoading] = useState(false);

  const getPokemon = async () => {
    setLoading(true);
    await database()
      .ref(`pokeBag/${user.user.uid}`)
      .once('value')
      .then(res => {
        if (res.val()) {
          setPokeList(Object.values(res.val()));
        }
      });

    setLoading(false);
  };

  useEffect(() => {
    getPokemon();
  }, []);

  const RenderPokemon = ({item}) => (
    <TouchableOpacity
      style={{flex: 1}}
      activeOpacity={0.9}
      onPress={() => navigation.navigate('Detail', {name: item.name})}>
      <PokePic name={item.name} />
    </TouchableOpacity>
  );

  const emptyList = () => {
    return (
      <View style={styles.emptyList}>
        <Text style={styles.emptyListText}>
          You don't have any pokemon in your pokebag
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Pokemon Bag</Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{padding: 10}}
        numColumns={2}
        ListEmptyComponent={emptyList}
        data={pokeList}
        renderItem={RenderPokemon}
        keyExtractor={item => item.name}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: '#455a64',
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    color: Colors.white,
    marginTop: 20,
    marginHorizontal: 20,
    marginBottom: 20,
  },
  emptyList: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  emptyListText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.white,
  },
});
