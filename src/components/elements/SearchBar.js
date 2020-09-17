// useref is a hook used to keep immutable values between renders
import React, { useState, useRef } from "react";
import FontAwesome from "react-fontawesome";

import {
	StyledSearchBar,
	StyledSearchBarContent,
} from "../styles/StyledSearchBar";

// you don't use implicit returns when you are going to have logic in components
const SearchBar = ({ callback }) => {
	// create state first
	const [ state, setState ] = useState("");
	const timeOut = useRef(null);

	// working with searchbar texts
	const doSearch = (event) => {
		const { value } = event.target;

		// clear timeout and grab current value
		clearTimeout(timeOut.current);
		setState(value);

		timeOut.current = setTimeout(() => {
			// when user types, it waits for 1/2 second before kicking callback func
			callback(value);
		}, 500);
	};

	return (
		<StyledSearchBar>
			<StyledSearchBarContent>
				{/* the attributes here are called props */}
				<FontAwesome className="fa-search" name="search" size="2x" />
				<input
					type="search"
					placeholder="Search Movie"
					onChange={doSearch}
					value={state}
				/>
			</StyledSearchBarContent>
		</StyledSearchBar>
	);
};

export default SearchBar;
