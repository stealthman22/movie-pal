import React from "react";

//  You can use arrow func or regular func for func components
//  With arrow func, we can use something called the implicit return
//  When you are jus treturning one thing

import RMDBLogo from "../images/reactMovie_logo.png";
import TMDBLogo from "../images/tmdb_logo.svg";

import {
	StyledHeader,
	StyledRMDBLogo,
	StyledTMDBLogo,
} from "../styles/StyledHeader";

const Header = () => (
	<StyledHeader>
		<div className="header-content">
			<StyledRMDBLogo src={RMDBLogo} alt="rmdb-logo" />
			<StyledTMDBLogo src={TMDBLogo} alt="tmdb-logo" />
		</div>
	</StyledHeader>
);

export default Header;
