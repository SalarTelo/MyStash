import React from 'react';
import {Text, View, SafeAreaView,StyleSheet, Image, MaskedViewIOS} from 'react-native';
import Accordion from '../components/Accordion';
import LinearGradient from 'react-native-linear-gradient';
import * as Data from '../public/data.json';

const GuideScreen = () => {

    const GradientText = props => (
        <MaskedViewIOS maskElement={<Text {...props} />}>
          <LinearGradient colors={['#c780ff', '#471bc5']} start={{ x: 1, y: 0 }} end={{ x: 0, y: 0 }}>
            <Text {...props} style={[props.style, { opacity: 0 }]} />
          </LinearGradient>
        </MaskedViewIOS>
      );

    return (
     <SafeAreaView >
        <View style={{
              justifyContent: 'space-evenly',
              alignItems: 'center',
              }}>
          <Image source={require('../assets/png/info_icon.png')} style={{
              width: 90,
              height: 90,
              opacity: 0.8,
              marginTop: 46,
              tintColor: '#000',
            }}/>
          <GradientText style={{fontSize: 44, fontWeight: '700', marginTop: 44, marginBottom: 45}}>
            Guide
          </GradientText>
          {Data.guideText.map(data =>(
          <Accordion 
             title = {data.title}
             data = {data.data}
          />))}
        </View>
    </SafeAreaView>  
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
    },

  });

export default GuideScreen;