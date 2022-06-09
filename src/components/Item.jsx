import React from 'react'
import { Text, View, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { selectCripto } from '../store/actions/selectCripto'
import { connect } from 'react-redux'

const Item = ( {title, navigation, id, ...props} ) => {
  const onPress = () => {
    navigation.navigate('Transação')
    props.selectCripto(id)
  }

  return (
    <View style={styles.item}>
      <TouchableOpacity onPress={onPress} style={{ flexDirection: 'row' }}>
        <Icon name="bitcoin" size={25} color="#DAA520" style={{ marginRight: 10 }} />
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    </View>
  )

};

const styles = StyleSheet.create({
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

const mapStateToProps = state => {
  return {
      selectCripto: state.selectCripto.selectCripto
  }
}

const mapDispatchToProps = dispatch => {
  return {
    selectCripto(cripto) {
          const action = selectCripto(cripto)
          dispatch(action)
      }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Item)