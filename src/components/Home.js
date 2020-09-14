// Call in react hooks api
import React, { useState, useEffect } from "react";
// import api values from config js
import {
	API_URL,
	API_KEY,
	API_BASE_URL,
	POSTER_SIZE,
	BACKDROP_SIZE,
	IMAGE_BASE_URL,
} from "../config";

//  import components

import HeroImage from "./elements/HeroImage";
import SearchBar from "./elements/SearchBar";
import Grid from "./elements/Grid";
import Spinner from "./elements/Spinner";
import LoadMoreBtn from "./elements/LoadMoreBtn";
import MovieThumb from "./elements/MovieThumb";

// Use a react fragment when you don't wanna create a div
// or just empty brackets, it still is fragment
// Use state returns an array with state and setter

//  Import custom hook
import { useHomeFetch } from "./hooks/useHomeFetch";
const Home = () => {
	const [ { state, loading, error }, fetchMovies ] = useHomeFetch();
	console.log(state);

	if (error) return <div>Something went wrong...</div>;
	// Nothing shows on first render so prevent crash by:
	if (!state.movies[0]) return <Spinner />;

	return (
		<React.Fragment>
			<HeroImage
				image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.heroImage
					.backdrop_path}`}
				title={state.heroImage.original_title}
				text={state.heroImage.overview}
			/>
			<SearchBar />
			<Grid />
			<MovieThumb />
			<Spinner />
			<LoadMoreBtn />
		</React.Fragment>
	);
};
export default Home;
