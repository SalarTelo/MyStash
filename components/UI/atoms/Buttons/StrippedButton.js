import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import Styling from './Styling';

function Button({children, weight, onPress}) {
  const styling = {
    fontWeight: weight,
    color: 'white',
  };

  return (
    <TouchableOpacity onPress={onPress} style={{alignSelf: 'center'}}>
      <Text style={{...styling, ...Styling.button}}>{children}</Text>
    </TouchableOpacity>
  );
}

function ThinStrippedButton({children, onPress}) {
  return (
    <Button onPress={onPress} weight={'200'}>
      {children}
    </Button>
  );
}
function StrippedButton({children, onPress}) {
  return (
    <Button onPress={onPress} weight={'400'}>
      {children}
    </Button>
  );
}
function BoldStrippedButton({children, onPress}) {
  return (
    <Button onPress={onPress} weight={'800'}>
      {children}
    </Button>
  );
}
export {StrippedButton, ThinStrippedButton, BoldStrippedButton};
