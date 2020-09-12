// Call in react hooks api
import React, { useState, useEffect } from "react";
// import api values from config js
import {
	API_URL,
	API_KEY,
	API_BASE_URL,
	POSTER_SIZE,
	BACKDROP_SIZE,
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
const Home = () => {
	const [ state, setState ] = useState({ movies: [] });
	const [ loading, setLoading ] = useState(false);
	const [ error, setError ] = useState(false);
	console.log(state);

	// async calls waits for something to be returned (our movies)
	const fetchMovies = async (endpoint) => {
		setError(false);
		setLoading(true);

		// try catch block
		// Await the data, then await again to first parse it into json
		try {
			const result = await (await fetch(endpoint)).json();
			console.log(result);
			// extra () make it treat this as an obkect not at funcion
			setState((prev) => ({
				...prev,
				// The returned movies
				movies: [ ...result.results ],
				// Short circuiting
				heroImage: prev.heroImage || result.results[0],
				currentPage: result.page,
				totalPages: result.total_pages,
			}));
		} catch (error) {
			setError(true);
		} finally {
			setLoading(false);
		}
	};

	// trigger fetchMovies func (used lifecycle methods previously)
	useEffect(() => {
		fetchMovies(`${API_URL}movie/popular?api_key=${API_KEY}`);
		// empty array is called a dependency array
		// prevents endpoint from running every render
		// it runs it once the component is mounted at app start
	}, []);

	return (
		<React.Fragment>
			<HeroImage />
			<SearchBar />
			<Grid />
			<MovieThumb />
			<Spinner />
			<LoadMoreBtn />
		</React.Fragment>
	);
};
export default Home;
