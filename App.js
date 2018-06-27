import React, {Component} from "react";
import {createStore} from "redux";
import {Provider} from "react-redux";
import devToolsEnhancer from "remote-redux-devtools";

import {PersistGate} from "redux-persist/integration/react";

import Main from "./app/components/Main";
import rootReducer from "./app/reducers";

import {persistStore, persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["todos"]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, devToolsEnhancer());
const persistor = persistStore(store);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Main />
        </PersistGate>
      </Provider>
    );
  }
}
