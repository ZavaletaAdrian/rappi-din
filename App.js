import React from "react";
import { StyleSheet } from "react-native";
import { createStore, combineReducers, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import { Provider } from "react-redux";
import authReducer from "./validators/reducers/authReducer";
import LoginValidation from "./Navigation/LoginValidator";

const rootReducer = combineReducers({
  auth: authReducer,
});
const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {
  return (
    <Provider store={store}>
      <LoginValidation />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
