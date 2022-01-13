import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Collapse, CollapseHeader, CollapseBody } from 'accordion-collapse-react-native';

const Accordion = ({title,data}) => {

const [toggle, setToggle] = useState(false);

    return (
       <View>
          <Collapse onToggle={()=> setToggle(!toggle)}style={styles.bodyContainer}>
            <CollapseHeader style={styles.headerContainer}>
              <View style={{flexDirection: 'row',justifyContent: 'flex-start'}}>
                <Text style={[styles.titleContainer, toggle === true ? styles.titleColor : null ]}>{title}</Text>
                <Image source={require('../assets/png/arrow_icon.png')} 
                style={[styles.arrowImage, toggle === true ? styles.arrowDown : styles.arrowUp]}
                />
              </View>
            </CollapseHeader>
            <CollapseBody style={styles.textContainer}>
               <Text style={{fontSize: 14}}>{data}</Text>
            </CollapseBody>
         </Collapse>
       </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
      width: 390,
      margin: 10,
      marginLeft: 50,
    },
    bodyContainer: {
       borderWidth: 0.5,
       borderColor: '#C2C2C2',
    },
    titleContainer: {
        fontSize: 20,
        fontWeight: '700',
    },
    titleColor: {
        color: "#471bc5",
    },
    textContainer: {
        marginTop: 0,
        marginRight: 50,
        marginLeft: 50,
    },
    arrowImage: {
      width: 20, 
      height: 20, 
      resizeMode: 'stretch', 
      tintColor: '#000',
      marginTop: 3,
      marginLeft: 300,
      position: 'absolute',
    },
    arrowUp: {
      transform: [{rotate:'-90deg'}],
      tintColor: '#C2C2C2',
    },
    arrowDown: {
      transform: [{rotate:'90deg'}],
    },

  });


export default Accordion;