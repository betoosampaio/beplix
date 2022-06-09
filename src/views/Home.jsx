import React, { useEffect } from 'react'
import { View, FlatList, Text } from 'react-native';
import { connect } from 'react-redux';
import Item from '../components/Item'
import { loadCripto } from '../store/actions/cripto'

const Home = props => {
  const { cripto } = props
  const axios = require('axios')

  useEffect(() => {
    const response = axios.get('https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
      headers: {
        'X-CMC_PRO_API_KEY': '1a86edd2-beee-440b-8b46-b767e33c43fd',
      },
    }).then(e => {
      let res = []
      e.data.data.map(e => {
        res.push({ id: e.id, title: e.name, priceUSD: e.quote.USD.price })
      })
      props.loadCripto(res)
    })
  }, [])

  const renderItem = ({ item }) => (
    <Item title={item.title} navigation={props.navigation} id={item.id} />
  );

  return (
    <View style={{marginBottom: 30}}>
      <Text style={{textAlign: 'center', fontSize: 20, marginTop: 10, marginBottom: 10}}>Selecione a moeda</Text>
      <FlatList
        data={cripto}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>    
  )
}

const mapStateToProps = state => {
  return {
    cripto: state.cripto.cripto,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadCripto(date) {
      const action = loadCripto(date)
      dispatch(action)
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home) 