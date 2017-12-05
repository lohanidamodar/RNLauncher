import React from 'react';
import { Text, StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import createStore from './store';
import RootNav from './navigators/RootNavigator';
import bootstrap from './bootstrap';
import globalStyles from './styles/GlobalStyles';

const { persistor, store } = createStore();

const onBeforeLift = () => {};
bootstrap();




// Root component
let App = () => {
  return (
    <Provider store={store}>
      <PersistGate
        loading={<Text>Loading..</Text>}
        onBeforeLift={onBeforeLift}
        persistor={persistor}>
        <StatusBar
          backgroundColor={globalStyles.$statusBarColor}
          barStyle="light-content"
          />
        <RootNav />
      </PersistGate>
    </Provider>
  );

}



export default App;
