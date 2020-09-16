// Call in react hooks api
import React, { useState } from "react";
// import api values from config js
import {
	API_URL,
	API_KEY,
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

import NoImage from "./images/no_image.jpg";

const Home = () => {
	const [
		// state has been destrucured further
		{ state: { movies, currentPage, totalPages, heroImage }, loading, error },
		fetchMovies,
	] = useHomeFetch();
	// Let's create a search box state
	const { searchTerm, setSearchTerm } = useState("");

	const loadMoreMovies = () => {
		const searchEndPoint = `${API_URL}search/movie?api_key=${API_KEY}&query=${searchTerm}&page=${currentPage +
			1}`;
		const popularEndPoint = `${API_URL}movie/popular?api_key=${API_KEY}&page=${currentPage +
			1}`;

		const endpoint =
			searchTerm ? searchEndPoint :
			popularEndPoint;

		fetchMovies(endpoint);
	};

	if (error) return <div>Something went wrong...</div>;
	// Nothing shows on first render so prevent crash by:
	if (!movies[0]) return <Spinner />;

	return (
		<React.Fragment>
			<HeroImage
				image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${heroImage.backdrop_path}`}
				title={heroImage.original_title}
				text={heroImage.overview}
			/>

			<SearchBar />

			{/* header here is a prop */}
			<Grid
				header={

						searchTerm ? "Search Result" :
						"Popular Movies"
				}>
				{movies.map((movie) => (
					<MovieThumb
						key={movie.id}
						// same as clickable=true
						clickable
						// note that we are not getting this image from the state
						image={

								movie.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}` :
								NoImage
						}
						movieId={movie.id}
						movieName={movie.original_title}
					/>
				))}
			</Grid>
			{/* this is a short circuit, same as loading ? <Spinner /> :
				"" */}
			{loading && <Spinner />}
			{/* and yet another shortcircuit
				restrains loadmore btn from showing when we are loading, and doesn't 
				show when we are on last page, after grabbing all movies
			 */}
			{currentPage < totalPages &&
			!loading && <LoadMoreBtn text="Load More" callback={loadMoreMovies} />}
		</React.Fragment>
	);
};
export default Home;
