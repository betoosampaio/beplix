import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'

import loginReducer from './reducers/login'

const reducers = combineReducers({
    login: loginReducer,
})

const storeConfig = () => {
    return configureStore({reducer: reducers})
}

export default storeConfig