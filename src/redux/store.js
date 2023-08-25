import operations from "./reducers/todo_reducers";
const { createStore, combineReducers } = require("redux");

const rootReducer = combineReducers({ todo: operations });
const store = createStore(rootReducer);

export default store;
