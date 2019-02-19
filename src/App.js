import React, { Component } from 'react';
import styles from './App.css';
import WIPContainer from 'js/components/container/WIPContainer'
import {Store, Provider, connect} from './store/store'
import ConnectedControls from 'js/components/container/Controls'
import ConnectedData from 'js/components/container/Data'

const App = () => {
	return (
		<div className={styles.App}>
			<Provider>
				<ConnectedControls />
				<ConnectedData />
				<WIPContainer />
			</Provider>
		</div>
	);
};
export default App;