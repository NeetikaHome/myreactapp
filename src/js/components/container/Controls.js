// @flow

import React, { Component } from 'react';

import {connect} from '../../../store/store';

type ControlProp = {
	get: () => {},
	reset: () => {}
}
const Controls =(prop: ControlProp) => {
	return (
		<div>
			<button
				onClick={prop.get}>
				Fetch Data
			</button>

			<button
				onClick={prop.reset}>
				Reset
			</button>
		</div>
	)
};
const mapStateToProps =  (state, props) => ({

});

const mapDispatchToProps = dispatch => ({
	get: () => dispatch({type: "FETCH_DATA", payload: "HelloWorld"}),
	reset: () => dispatch({
		type: "RESET_DATA",
		payload: "null"
	})
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Controls);
