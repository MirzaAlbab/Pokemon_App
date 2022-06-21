import {StyleSheet, FlatList, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Rdb} from '../../helper/Rdb';
import PokePic from '../../components/PokePic';

export default function PokeBag() {
  const [pokemons, setPokemons] = useState([]);

  const getPokemons = async () => {
    try {
      const res = await Rdb.ref(`pokeBag/${_user._id}/`).once('value');
      console.log('RES POKEBAG: ', res.val());
      setPokemons(res.val().name);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPokemons();
  });

  const RenderPokemon = ({item}) => (
    <TouchableOpacity
      style={{flex: 1}}
      activeOpacity={0.9}
      onPress={() => navigation.navigate('Detail', {name: item.name})}>
      <PokePic name={item.name} />
    </TouchableOpacity>
  );
  return (
    <View>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{padding: 10}}
        numColumns={2}
        data={pokemons}
        renderItem={RenderPokemon}
        keyExtractor={item => item.name.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
