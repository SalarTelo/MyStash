import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

function DashboardView() {


  return (
    <View
      style={{
        justifyContent: 'space-evenly',
        alignItems: 'center',
        height: '100%',
      }}>
      {/*Buttons for Spaces, Boxes & Products*/}
      <View>
        <View style={{width: 330}}>
          <ScreenButton iconDir={require('../assets/png/space_icon.png')}>
            Utrymmen
          </ScreenButton>
          <View style={styles.separatorLine} />
          <ScreenButton iconDir={require('../assets/png/box_icon.png')}>
            Lådor
          </ScreenButton>
          <View style={styles.separatorLine} />
          <ScreenButton iconDir={require('../assets/png/boxes_icon.png')}>
            Produkter
          </ScreenButton>
        </View>
      </View>

      {/* QR */}
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TouchableOpacity
          style={{
            marginTop: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={require('../assets/png/qr_icon.png')}
            style={{
              width: 90,
              height: 90,
              opacity: 0.8,
            }}
          />
          <Text
            style={{
              color: '#ffffff',
              fontSize: 25,
              marginTop: 10,
              opacity: 0.8,
            }}>
            Scanna
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{position: 'absolute', right: -35, bottom: '3%'}}>
          <Image
            source={require('../assets/png/info_icon.png')}
            style={{width: 20, height: 20}}
          />
        </TouchableOpacity>
      </View>
      {/* Settings */}
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 20,
        }}>
        <Image
          source={require('../assets/png/settings_icon.png')}
          style={{
            width: 25,
            height: 25,
            marginRight: 10,
          }}
        />
        <Text
          style={{
            color: '#fff',
            fontSize: 25,
            fontWeight: '400',
          }}>
          Inställningar
        </Text>
      </TouchableOpacity>
    </View>
  );
}
const ScreenButton = ({children, iconDir}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
      }}>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
          flex: 1,
        }}>
        <Image
          style={{width: 40, height: 40, resizeMode: 'stretch'}}
          source={iconDir}
        />
        <Text style={styles.buttonText}>{children}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{padding: 10}}>
        <Image
          style={{width: 20, height: 20, resizeMode: 'stretch'}}
          source={require('../assets/png/info_icon.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonText: {
    color: '#fff',
    fontSize: 25,
    paddingHorizontal: 20,
    paddingVertical: 35,
  },
  separatorLine: {
    borderBottomColor: 'rgba(255,255,255,0.2)',
    borderBottomWidth: 1,
    width: '20%',
    alignSelf: 'center',
  },
});
export default DashboardView;
