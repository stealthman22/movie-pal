import React from "react";
import { Link } from "@reach/router";
import PropTypes from "prop-types";

import { StyledNavigation } from "../styles/StyledNavigation";

const Nav = ({ movie }) => (
	<StyledNavigation>
		<div className={"navigation-content"}>
			<Link to="/">
				<p>Home</p>
			</Link>
			<p>|</p>
			<p>{movie}</p>
		</div>
	</StyledNavigation>
);

Nav.propTypes = {
	movie: PropTypes.string,
};
export default Nav;
