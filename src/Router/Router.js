import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from '../views/Home'
import Login from '../views/Login'

const Stack = createNativeStackNavigator();

const Router = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="Home" component={Home}/>
        </Stack.Navigator>
    )
}

export default Router