import React from 'react';
import {
  SafeAreaView,

  View,
} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {useCamera} from 'react-native-camera-hooks';

{
  /*IGNORE THIS*/
}
const CameraScreen = () => {
  const [{cameraRef}, {takePicture}] = useCamera({
    autoFocus: true,
    canDetectBarcode: true,
    type: RNCamera.Constants.Type.back,
  });
  return (
    <View style={{flex: 1}}>
      <RNCamera
        ref={cameraRef}
        captureAudio={false}
        style={{
          flex: 1,
        }}
        type={'back'}
      />
      <SafeAreaView
        style={{
          position: 'absolute',
          width: '100%',
          height: ' 100%',
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}
      />
    </View>
  );
};
export default CameraScreen;
