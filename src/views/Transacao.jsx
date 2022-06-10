import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, Pressable, Alert } from 'react-native'
import { connect } from 'react-redux'

import { transactionCripto } from '../store/actions/transaction'

const Transacao = props => {
    const cripto = props.cripto.filter(e => e.id == props.selectCripto)[0]
    const [amount, setAmount] = useState('')
    
    const transaction = op => {
        props.transactionCripto([...props.transaction, {id: cripto.id, amount: Number(amount), operation: op, valueUSD: amount * cripto.priceUSD}])     
        Alert.alert(
            "Transação Efetuada",
            `Caro ${props.login} você acaba de ${op == 1 ? 'comprar' : 'vender'} ${amount} de ${cripto.title}.`,
            [              
              { text: "OK" }
            ])
        props.navigation.navigate('Extrato')
    }

    return (
        <View>
            <Text style={{ fontSize: 20, textAlign: 'center', marginTop: 13 }}>{cripto.title}</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 12 }}>
                <Text style={styles.text}>Quantidade:</Text>
                <TextInput
                    style={styles.input}
                    keyboardType='number-pad'
                    onChangeText={(text) => setAmount(text)}
                    value={amount}
                />

            </View>
            <View><Text style={{ marginLeft: 10 }}>Valor da operação: U${(amount * cripto.priceUSD).toFixed(2).toString()}</Text></View>
            <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                <Pressable style={styles.buttonBuy} onPress={() => transaction(1)}>
                    <Text style={styles.textButton}>Comprar</Text>
                </Pressable>
                <Pressable style={styles.buttonSell} onPress={() => transaction(2)}>
                    <Text style={styles.textButton}>Vender</Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        width: 100
    },
    text: {
        margin: 10,
        fontSize: 15,
    },
    buttonBuy: {
        backgroundColor: '#fff',
        borderRadius: 30,
        width: '30%',
        height: 30,
        marginTop: 30,
        justifyContent: 'center',
        marginRight: 10,
        backgroundColor: 'gray',
    },
    buttonSell: {
        backgroundColor: '#fff',
        borderRadius: 30,
        width: '30%',
        height: 30,
        marginTop: 30,
        justifyContent: 'center',
        marginRight: 10,
        backgroundColor: 'blue'
    },
    textButton: {
        textAlign: 'center',
        width: '100%',
        padding: 5,
        fontWeight: 'bold',
        color: 'white'
    }
});

const mapStateToProps = state => {
    return {
        selectCripto: state.selectCripto.selectCripto,
        cripto: state.cripto.cripto,
        transaction: state.transaction.transaction,
        login: state.login.login,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        transactionCripto(date) {
        const action = transactionCripto(date)
        dispatch(action)
      }
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Transacao)