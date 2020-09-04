import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import axios from 'axios';
import {applyMiddleware, createStore} from 'redux';
import axiosMiddleware from 'redux-axios-middleware';
import {Provider as StoreProvider} from 'react-redux';
import ListComponent from './ListComponent';
import {rootReducer} from './UserReducer';
import {composeWithDevTools} from 'redux-devtools-extension';

const client = axios.create({
  baseURL: 'https://reqres.in/api',
  responseType: 'json',
  timeout: 30000, // 30 sec
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(axiosMiddleware(client))),
);

const App = ({}) => {
  return (
    <StoreProvider store={store}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ListComponent />
      </SafeAreaView>
    </StoreProvider>
  );
};

export default App;
