import React from 'react';
import {
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

{
  /*
  TODO: MAKE THIS A TEMPLATE
*/
}
const SpacesScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.screenContainer}>
      {/*Search bar*/}
      <View style={styles.headerContainer}>
        {/*When it is time to implement functionality. There is alot of events for TextInput*/}
        <TextInput
          style={styles.searchbarTextInput}
          textAlign={'center'}
          placeholder={'Sök...'}
          placeholderTextColor={'rgba(0,0,0,0.3)'}
        />
        {/*Simple underline. */}
        <View
          style={{width: 200, height: 0.5, backgroundColor: 'rgba(0,0,0,0.17)'}}
        />
      </View>

      {/*Main Content*/}
      <View style={styles.contentContainer}>
        {/* Create Button */}
        <TouchableOpacity style={{paddingVertical: 13, paddingHorizontal: 20}}>
          <Text style={{fontSize: 22, color: 'rgba(0,0,0,0.37)'}}>
            Skapa Utrymme +
          </Text>
        </TouchableOpacity>

        {/* List of Spaces */}
        {/* There should obviously be an array we can .map through and not manually put items.*/}
        <ScrollView style={{width: '100%'}}>
          <ListItem label={'Hemma'} />
          <ListItem label={'Garderob'} />
        </ScrollView>
      </View>

      {/*Footer*/}
      <View style={styles.footerContainer}>
        {/*Home Button*/}
        <TouchableOpacity style={styles.footerButton}>
          <Image
            style={{width: 36, height: 36, tintColor: '#000', marginBottom: 2}}
            source={require('../assets/png/home_icon.png')}
          />
          <Text style={{textAlign: 'center', fontSize: 15}}>Hem</Text>
        </TouchableOpacity>

        {/*Scan Button*/}
        <TouchableOpacity style={styles.footerButton}>
          <Image
            style={{
              width: 55,
              height: 55,
              tintColor: '#a538ff',
              marginBottom: 2,
            }}
            source={require('../assets/png/qr_icon.png')}
          />
          <Text
            style={{
              textAlign: 'center',
              fontSize: 24,
              color: '#a538ff',
              fontWeight: '500',
            }}>
            Scanna
          </Text>
        </TouchableOpacity>

        {/*Settings Button*/}
        <TouchableOpacity style={styles.footerButton}>
          <Image
            style={{width: 36, height: 36, tintColor: '#000', marginBottom: 2}}
            source={require('../assets/png/settings_icon.png')}
          />
          <Text style={{textAlign: 'center', fontSize: 15}}>Inställningar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const ListItem = ({label}) => {
  const ThinLine = () => {
    return (
      <View
        style={{
          width: '100%',
          height: 0.8,
          backgroundColor: 'rgba(0,0,0,0.27)',
        }}
      />
    );
  };
  return (
    <View>
      <ThinLine />
      <TouchableOpacity style={styles.listItem}>
        <Text style={{fontSize: 18}}>{label}</Text>
        <Image
          style={{height: 13, width: 13, tintColor: 'rgba(0,0,0,0.49)'}}
          source={require('../assets/png/arrow_icon.png')}
        />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    alignItems: 'center',
  },
  headerContainer: {
    alignItems: 'center',
    marginVertical: 5,
  },
  searchbarTextInput: {
    fontSize: 20,
    fontWeight: '200',
    paddingVertical: 5,
    width: '100%',
    minWidth: 150,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
  },

  footerContainer: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    marginBottom: Platform.OS === 'android' ? 10 : 0,
  },
  footerButton: {
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
  },

  listItem: {
    paddingVertical: 18,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
export default SpacesScreen;
