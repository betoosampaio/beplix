import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'

import loginReducer from './reducers/login'
import criptoReducer from './reducers/cripto'

const reducers = combineReducers({
    login: loginReducer,
    cripto: criptoReducer,
})

const storeConfig = () => {
    return configureStore({reducer: reducers})
}

export default storeConfig