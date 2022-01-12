import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Collapse,CollapseHeader, CollapseBody } from 'accordion-collapse-react-native';
import Icon from "react-native-vector-icons/MaterialIcons";

const Accordion = ({title,data}) => {

const [toggle, setToggle] = useState(false);

    return (
       <View>
          <Collapse onToggle={()=> setToggle(!toggle)}style={styles.bodyContainer}>
            <CollapseHeader style={styles.headerContainer}>
              <View>
                <Text style={[styles.titleContainer, toggle === true ? styles.titleColor : null ]}>{title}</Text>
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

  });


export default Accordion;