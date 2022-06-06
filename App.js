import React from 'react';
import { Provider } from 'react-redux'
import storeConfig from './src/store/storeConfig'
import { NavigationContainer } from '@react-navigation/native';
import Router from './src/Router/Router'

import Login from './src/views/Login'

const store = storeConfig()

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Router />
      </Provider>
    </NavigationContainer>
  );
}

export default App
