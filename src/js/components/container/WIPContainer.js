import React, {Component} from "react";
import WIPPlaceholder from "../presentational/WIPPlaceholder"
import girl from "assests/images/Enchanted_Girl_7927.svg";

class WIPContainer extends Component {
	constructor() {
		super();
		this.state = {
			title : ""
		};

	}

	render() {
		return (
			<div id='wip-container'>
				<WIPPlaceholder
					src="src/assests/images/Enchanted_Girl_7927.svg"
					text=' I will be here soon . Thanks for visiting.'
				/>
			</div>
		)
	}
}
export default WIPContainer ;
