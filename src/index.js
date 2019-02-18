import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {ConnectedRouter} from "connected-react-router";

function render(Component) {
	const component = (

				<Component />

	);

	const root = document.getElementById('react_root');
	if (root) {
		ReactDOM.render(component, root);
	}
}
render(App)
