import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import DashboardView from '../components/DashboardView';
import LoginView from '../components/LoginView';

function HomeScreen({navigation}) {
  const [isLoggedIn, setLoggedIn] = useState(false);
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
          {/*Make the transition animate for a smoother experience.*/}
          {isLoggedIn ? <DashboardView/> : <LoginView/>}
        </View>

        <View style={styles.footerContainer}>
          <TouchableOpacity>
            <Text
              style={{
                fontSize: 18,
                color: 'rgba(255,255,255,0.53)',
                fontWeight: '200',
              }}>
              Kontakta Oss
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text
              style={{
                fontSize: 18,
                color: 'rgba(255,255,255,0.53)',
                fontWeight: '200',
              }}>
              Guide
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
  headerContainer: {
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerContainer: {
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  contentContainer: {
    flex: 1,
    width: '100%',
  },
});

export default HomeScreen;
