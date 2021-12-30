import React from 'react';
import {
  Image,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import LinearGradient from 'react-native-linear-gradient';

function HomeScreen({navigation}) {
  const styles = StyleSheet.create({
    headerContainer: {
      marginTop: 10,
      alignItems: 'center',
      justifyContent: 'center',
    },
    footerContainer: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    contentContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 50,
    },
  });

  return (
    <LinearGradient colors={['#c780ff', '#471bc5']} useAngle={true} angle={230}>
      <SafeAreaView style={{height: '100%'}}>
        <View style={styles.headerContainer}>
          <Text style={{fontSize: 40, fontWeight: '700', color: 'white'}}>
            MyStash
          </Text>
        </View>

        <View style={styles.contentContainer}>
          {/*Make this swap between Login view and Home view without moving the background. Look into how animations work in react*/}
          <DashboardView />
        </View>

        <View style={styles.footerContainer}>
          <TouchableOpacity style={{marginTop: 10}}>
            <Text
              style={{
                fontSize: 18,
                color: 'rgba(255,255,255,0.53)',
                fontWeight: '200',
                marginBottom: 5,
              }}>
              Kontakta Oss
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

function DashboardView() {
  const styles = StyleSheet.create({
    buttonText: {
      color: '#fff',
      fontSize: 23,
      width: 300,
      paddingHorizontal: 10,
      paddingVertical: 20,
    },
    separatorLine: {
      borderBottomColor: 'rgba(255,255,255,0.2)',
      borderBottomWidth: 1,
      width: '20%',
      alignSelf: 'center',
    },
  });
  const ScreenButton = ({children}) => {
    return (
      <View style={{flexDirection: 'row'}}>
        <Image source={}/>
        <TouchableOpacity>
          <Text style={styles.buttonText}>{children}</Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <>
      {/*Buttons for Spaces, Boxes & Products*/}
      <View>
        <View>
          <ScreenButton>Spaces</ScreenButton>
          <View style={styles.separatorLine} />
          <ScreenButton>Boxes</ScreenButton>
          <View style={styles.separatorLine} />
          <ScreenButton>Products</ScreenButton>
        </View>
      </View>
    </>
  );
}

function LoginView() {
  const styles = StyleSheet.create({
    button: {
      width: 300,
      paddingVertical: 15,
      margin: 3,
      borderRadius: 30,
      overflow: 'hidden',
      backgroundColor: 'white',
    },

    buttonText: {
      color: 'black',
      fontWeight: '500',
      fontSize: 20,
      textAlign: 'center',
    },
  });
  return (
    <>
      <Text
        style={{
          marginBottom: 10,
          fontSize: 40,
          color: 'white',
          fontWeight: '100',
        }}>
        Logga In
      </Text>
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={{...styles.buttonText}}>Google</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={{...styles.buttonText}}>Hotmail</Text>
      </TouchableOpacity>

      {Platform.OS === 'ios' && (
        <TouchableOpacity
          style={{...styles.button, backgroundColor: 'black'}}
          onPress={() => {}}>
          <Text style={{...styles.buttonText, color: 'white'}}>Apple</Text>
        </TouchableOpacity>
      )}

      <TouchableOpacity style={{marginTop: 10}}>
        <Text
          style={{
            fontSize: 18,
            color: 'rgba(255,255,255,0.53)',
            fontWeight: '200',
          }}>
          Hjälp
        </Text>
      </TouchableOpacity>
    </>
  );
}

export default HomeScreen;
