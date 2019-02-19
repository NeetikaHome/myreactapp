import React, { Component } from 'react';
import styles from './App.css';
import WIPContainer from 'js/components/container/WIPContainer'
import {Store, Provider, connect} from './store/store'
/*

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
       <WIPContainer/>
      </div>
    );
  }
}

export default App;
*/

const Controls =() => {
  const {state, dispatch} = React.useContext(Store);
  return (
    <div>
      <button
        onClick={()=> dispatch({type: "FETCH_DATA", payload: "Hello world!"})}>
        Fetch Data
      </button>

      <button
				onClick={()=> dispatch({type: "RESET_DATA", payload: null})}>
				Reset
			</button>
    </div>
  )
};

const Data = () => {
  const { state, dispatch} = React.useContext(Store);
  return (
    <div>
      {state.data}
    </div>
  )
}



const mapStateToProps =  (state, props) => ({
  message: `${state.data} ${props.extra}`
});

const mapDispatchToProps = dispatch => ({
  get: () => dispatch({type: "FETCH_DATA", payload: "HelloWorld"}),
  reset: () => dispatch({
    type: "RESET_DATA",
    payload: "null"
  })
});
const ConnectedData = connect(
  mapStateToProps,
  mapDispatchToProps
)(Data);

const App = () => {
	return (
		<div className={styles.App}>
			<Provider>
				<Controls />
				<Data />
				<WIPContainer />
			</Provider>
		</div>
	);
};
export default App;