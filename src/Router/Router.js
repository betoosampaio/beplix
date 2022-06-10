import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from '../views/Home'
import Login from '../views/Login'
import Transacao from '../views/Transacao'
import Extrato from '../views/Extrato'

const Stack = createNativeStackNavigator();

const Router = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="Transação" component={Transacao}/>
            <Stack.Screen name="Extrato" component={Extrato}/>
        </Stack.Navigator>
    )
}

export default Router