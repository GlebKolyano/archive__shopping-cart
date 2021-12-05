import createSagaMiddleware from "@redux-saga/core";
import { applyMiddleware, createStore } from "redux";
import { rootReducer } from "./reducers/rootReducer";

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

