import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'

import loginReducer from './reducers/login'
import criptoReducer from './reducers/cripto'
import selectCriptoReducer from './reducers/selectCripto'
import transactionReducer  from './reducers/transaction'

const reducers = combineReducers({
    login: loginReducer,
    cripto: criptoReducer,
    selectCripto: selectCriptoReducer,
    transaction: transactionReducer,
})

const storeConfig = () => {
    return configureStore({reducer: reducers})
}

export default storeConfig