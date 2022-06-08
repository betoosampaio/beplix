import React from 'react'
import { Text, View, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

  const Item = ({ title }) => (
    <View style={styles.item}>
      <TouchableOpacity style={{flexDirection:'row'}}>
        <Icon name="bitcoin" size={25} color="#DAA520" style={{marginRight: 10}}/>
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    </View>
  );

  
const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      backgroundColor: '#FFF0F5',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 20,
    },
  });

  export default Item