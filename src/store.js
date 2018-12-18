import thunk from "redux-thunk";
import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import { routerMiddleware, routerReducer } from "react-router-redux";

import history from "./history";
import reducers from "./reducers";

const middleware = routerMiddleware(history);

const store = createStore(
	combineReducers({ ...reducers, router: routerReducer }),
	{},
	compose(
		applyMiddleware(thunk),
		applyMiddleware(middleware),
		window.devToolsExtension ? window.devToolsExtension() : (f) => f,
	),
);

export default store;
