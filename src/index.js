import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from 'react-router-redux';

import Routes from "./routes";
import history from "./history";
import store from "./store";

ReactDOM.render(
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<div>
				<Routes />
			</div>
		</ConnectedRouter>
	</Provider>,
	document.getElementById('root'),
);
