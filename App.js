import React from 'react';
import { Provider } from 'react-redux';
import AppNavigator from './AppNavigator';
import store from './store';

const App = () => (
  <Provider store={store}>
    <AppNavigator />
  </Provider>
);

export default App;
