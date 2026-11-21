import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SectionList, TouchableOpacity, Image, Button, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const data = [
  {
    title: 'ELECTRIC',
    bgcolor: '#ffff00',
    icon: 'flash',
    data: [
      {
        name: 'Pikachu',
        img: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_25-2x.png',
      },
      {
        name: 'Voltorb',
        img: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_100-2x.png',
      },
    ],
  },
  {
    title: 'WATER',
    bgcolor: '#87ceeb',
    icon: 'water',
    data: [
      {
        name: 'Squirtle',
        img: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_7-2x.png',
      },
      {
        name: 'Psyduck',
        img: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_54-2x.png',
      },
    ],
  },
  {
    title: 'FIRE',
    bgcolor: '#ffa07a',
    icon: 'flame',
    data: [
      {
        name: 'Charmander',
        img: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_4-2x.png',
      },
      {
        name: 'Growlithe',
        img: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_58-2x.png',
      },
    ],
  },
];

export default function App() {
  const renderItem = ({ item }) => {
    return (
        <TouchableOpacity
            style={styles.itemRow}
            onPress={() => Alert.alert(item.name + ' selected!')}
        >
          <View style={styles.nameColumn}>
            <Text style={styles.pokemonName}>{item.name}</Text>
          </View>
          <View style={styles.imageColumn}>
            <Image source={{ uri: item.img }} style={styles.cardImage} resizeMode="contain" />
          </View>
        </TouchableOpacity>
    );
  };

  return (
      <View style={styles.container}>
        <View style={styles.addButtonWrapper}>
          <Button
              title="ADD POKEMON"
              color="#2196f3"
              onPress={() => Alert.alert('Add Pokemon feature coming next lesson!')}
          />
        </View>

        <SectionList
            sections={data}
            keyExtractor={(item, index) => item.name + index}
            renderItem={renderItem}
            renderSectionHeader={({ section: { title, bgcolor, icon } }) => (
                <View style={[styles.sectionHeader, { backgroundColor: bgcolor }]}>
                  <Ionicons name={icon} size={18} color="#444" style={styles.headerIcon} />
                  <Text style={styles.headerText}>{title}</Text>
                </View>
            )}
        />
        <StatusBar style="auto" />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 40,
  },
  addButtonWrapper: {
    marginHorizontal: 10,
    marginBottom: 8,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 6,
    borderWidth: 1,
    borderColor: '#555',
  },
  headerIcon: {
    marginRight: 5,
  },
  headerText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#444',
  },
  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e8eaf6',
    paddingVertical: 14,
    paddingHorizontal: 12,
    borderBottomWidth: 1,
    borderColor: '#333',
  },
  nameColumn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageColumn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pokemonName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111',
  },
  cardImage: {
    width: 150,
    height: 210,
  },
});