import React, { useState } from 'react'
import { StyleSheet, Text, View, Pressable, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { changeLogin, changePassword } from '../store/actions/login'


const Login = props => {
    const { login, password } = props
    const axios = require('axios')
    const [errorPw, setErrorPw] = useState('')
    const [errorLogin, setErrorLogin] = useState('')

    const sendLogin = ({navigation}) => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${login}/`)
        .then(e => checkPassword(e.data.moves))
        .catch(e => setErrorLogin('Login não encontrado!'))
    }

    const checkPassword = moves => {
        const names = moves.map(e => e.move.name)
        if (names.includes(password)) {
            props.navigation.navigate('Home')
        } else {
            setErrorPw('Senha inválida!')
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>BEPLIX</Text>

            <Text style={styles.text}>Faça login em sua conta</Text>
            
            <Text style={{ color: '#fff', fontWeight: 'bold' }}>Login</Text>
            <TextInput
                style={styles.input}
                onChangeText={text => props.changeLogin(text)}
                value={login}
                placeholder={'000.000.000-12'}
                placeholderTextColor="white"
            />

            <Text style={{ color: '#fff', fontWeight: 'bold' }}>Senha</Text>
            <TextInput
                style={styles.input}
                onChangeText={text => props.changePassword(text)}
                value={password}
                placeholder={'***********'}
                placeholderTextColor="white"
            />
            <View style={{ alignItems: 'center' }}>
                <Pressable style={styles.button} onPress={sendLogin}>
                    <Text style={styles.textButton}>Entrar</Text>
                </Pressable>
                {errorLogin != '' && <Text style={{marginTop: 5, color: '#fff'}}>{errorLogin}</Text>}
                {errorPw != '' && <Text style={{marginTop: 5, color: '#fff'}}>{errorPw}</Text>}                
            </View> 
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#174986',
        paddingHorizontal: 18,
    },
    title: {
        fontSize: 34,
        marginBottom: 34,
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    text: {
        color: '#fff',
        fontSize: 15,
        marginBottom: 10,
        fontWeight: 'bold',
    },
    input: {
        width: '80%',
        marginBottom: 10,
    },
    button: {
        backgroundColor: '#fff',
        borderRadius: 30,
        width: '80%',
        height: 30,
        marginTop: 30,
        justifyContent: 'center',
    },
    textButton: {
        textAlign: 'center',
        width: '100%',
        padding: 5,
        fontWeight: 'bold'
    }
})

const mapStateToProps = state => {
    return {
        login: state.login.login,
        password: state.login.password,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changeLogin(date) {
            const action = changeLogin(date)
            dispatch(action)
        },
        changePassword(date) {
            const action = changePassword(date)
            dispatch(action)
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login) 