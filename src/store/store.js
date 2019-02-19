import React from 'react' ;
import reducer, {initialState} from './reducers';
 const Store = React.createContext();

const compose = (...funcs) => x =>
	funcs.reduceRight((composed, f) => f(composed),x);

const createStore = (reducer, initialState, middlewares) => {
 	const [state, dispatch] = React.useReducer(reducer,initialState);
 	if(typeof middlewares !== "undefined") {
 		const middlewareAPI = {
 			getState: () => state,
			dispatch: action => dispatch(action)
		};
 		const chain = middlewares.map(middleware => middleware(middlewareAPI));
 		const enhancedDispatch = compose(...chain)(dispatch);
 		return {state, dispatch: enhancedDispatch}
	}
 	return {state, dispatch};
 }
 const customMiddleware = store => next => action => {
	console.log("Action triggered");
	console.log(action);
	next(action);

 }

 const Provider = ({children}) => {
 	const store = createStore(reducer, initialState,[ customMiddleware ]);
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