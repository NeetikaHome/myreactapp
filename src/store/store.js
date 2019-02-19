import React from 'react' ;
import reducer, {initialState} from './reducers';
 const Store = React.createContext();

 const createStore = (reducer, initialState) => {
 	const [state, dispatch] = React.useReducer(reducer,initialState);
 	return {state, dispatch};
 }

 const Provider = ({children}) => {
 	const store = createStore(reducer, initialState);
	 return <Store.Provider value={store}>{children}</Store.Provider>
 }

 const connect = (
 	mapStateToProps = () =>{},
	mapDispatchToProps = () => {}
 ) => WrappedComponent  => {
 	return props => {
 		const {dispatch, state} = React.useContext(Store);
 		return (
 			<WrappedComponent
			  dispatch={dispatch}
				{...mapStateToProps(state,props)}
				{...mapDispatchToProps(dispatch,props)}
			/>
		)
	}
 }

 export {Store, Provider, connect}