import React from "react";
import PropTypes from "prop-types";
import style from '../../../App.css'

 const WIPPlaceholder = ({src, text}) => (
	 <header className={style.appHeader}>
		 <img src={src} className={style.appLogo}/>
		 <p>
			 {text}
		 </p>
	 </header>
 )

WIPPlaceholder.propTypes = {
 	src: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired
}

export default WIPPlaceholder;