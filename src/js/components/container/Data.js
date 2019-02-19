import React from "react";
import {connect} from "../../../store/store";

type DataProp = {
	message: string
}
const Data = (prop : DataProp) => {
	return (
		<div>
			{prop.message}
		</div>
	)
}


const mapStateToProps =  (state, props) => ({
	message: `${state.data}`
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
)(Data);

