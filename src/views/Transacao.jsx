import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, Pressable } from 'react-native'
import { connect } from 'react-redux'

const Transacao = props => {
    const cripto = props.cripto.filter(e => e.id == props.selectCripto)[0]
    const [teste, setTeste] = useState(0)
    console.log(cripto)
    const buy = () => {

    }

    const sell = () => {

    }

    return (
        <View>
            <Text style={{ fontSize: 20, textAlign: 'center', marginTop: 10 }}>{cripto.title}</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                <Text style={styles.text}>Quantidade:</Text>
                <TextInput
                    style={styles.input}
                    keyboardType='number-pad'
                    onChangeText={(text) => setTeste(text)}
                    value={teste}
                />
                
            </View>
            <View><Text style={{marginLeft: 10}}>Valor da operação: U${(teste*cripto.priceUSD).toFixed(2)}</Text></View>
            <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                <Pressable style={styles.buttonBuy} onPress={buy}>
                    <Text style={styles.textButton}>Comprar</Text>
                </Pressable>
                <Pressable style={styles.buttonSell} onPress={sell}>
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
        cripto: state.cripto.cripto
    }
}

export default connect(mapStateToProps)(Transacao)