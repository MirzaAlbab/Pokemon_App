import {
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
  TextInput,
  Text,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import PokePic from '../../components/PokePic';
import {baseUrl} from '../../helper/api';

import Colors from '../../helper/Colors';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Animation from '../../components/Animation';

export default function Home({navigation}) {
  const [pokeList, setPokeList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pokeListBackup, setPokeListBackup] = useState([]);
  const [currentpage, setCurrentPage] = useState(1);
  const getPokemon = async () => {
    setLoading(true);
    const res = await fetch(`${baseUrl}pokemon?limit=10&offset=${currentpage}`);
    const data = await res.json();
    console.log(data);
    setPokeList(data.results);
    setPokeListBackup(data.results);
    setLoading(false);
  };

  useEffect(() => {
    getPokemon();
  }, [currentpage]);

  const handleSearch = async val => {
    const searching = val.toLowerCase();
    console.log(searching);
    setPokeList(pokeListBackup.filter(it => it.name.match(searching)));
  };

  const RenderPokemon = ({item}) => (
    <TouchableOpacity
      style={{flex: 1}}
      activeOpacity={0.9}
      onPress={() => navigation.navigate('Detail', {name: item.name})}>
      <PokePic name={item.name} />
    </TouchableOpacity>
  );
  const renderFooter = () => {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          marginVertical: 10,
        }}>
        <TouchableOpacity onPress={() => setCurrentPage(currentpage + 1)}>
          <MaterialIcons
            name="navigate-before"
            size={30}
            color={Colors.white}
          />
        </TouchableOpacity>
        <Text style={styles.page}>{currentpage}</Text>
        <TouchableOpacity onPress={() => setCurrentPage(currentpage + 1)}>
          <MaterialIcons name="navigate-next" size={30} color={Colors.white} />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={styles.header}>Pokemon</Text>
        <TouchableOpacity
          style={{marginRight: 20, marginTop: 30}}
          onPress={() => navigation.navigate('PokeBag')}>
          <SimpleLineIcons name="handbag" size={25} color={Colors.white} />
        </TouchableOpacity>
      </View>
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Search by Name"
          style={{
            backgroundColor: Colors.purple,
            borderRadius: 8,
            paddingLeft: 40,
            height: 40,
            color: Colors.white,
          }}
          placeholderTextColor={Colors.white}
          onChangeText={value => handleSearch(value)}
        />
        <FontAwesome5
          name="search"
          color={Colors.white}
          style={{position: 'absolute', left: 15, top: '33%'}}
        />
      </View>
      {loading ? (
        <Animation />
      ) : (
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{padding: 10}}
          numColumns={2}
          data={pokeList}
          renderItem={RenderPokemon}
          keyExtractor={item => item.name.toString()}
          ListFooterComponent={renderFooter}
        />
      )}
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
  navpage: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
    height: 40,
  },
  page: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.white,
    marginHorizontal: 10,
  },
  searchContainer: {
    marginHorizontal: 20,
    backgroundColor: Colors.purple,
    borderRadius: 8,
    height: 40,
    color: Colors.white,
  },
});
