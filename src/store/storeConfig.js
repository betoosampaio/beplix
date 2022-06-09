import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'

import loginReducer from './reducers/login'
import criptoReducer from './reducers/cripto'
import selectCriptoReducer from './reducers/selectCripto'

const reducers = combineReducers({
    login: loginReducer,
    cripto: criptoReducer,
    selectCripto: selectCriptoReducer,
})

const storeConfig = () => {
    return configureStore({reducer: reducers})
}

export default storeConfig