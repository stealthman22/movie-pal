import React from "react";

// importing elements for this page/route

import MovieInfo from "./elements/MovieInfo";
import MovieInfoBar from "./elements/MovieInfoBar";
import Nav from "./elements/Nav";
import Actors from "./elements/Actors";
import Grid from "./elements/Grid";
import Spinner from "./elements/Spinner";

// custom hook
import { useMovieFetch } from "./hooks/UseMovieFetch";

//  Make a movie a page/route
const Movie = ({ movieId }) => {
	// from useMovieFetch custom hook
	const [ movie, loading, error ] = useMovieFetch(movieId);
	console.log(movie);
	return (
		<React.Fragment>
			<Nav />
			<MovieInfo />
			<MovieInfoBar />
			<Grid>
				<Actors />
			</Grid>
			<Spinner />
		</React.Fragment>
	);
};

export default Movie;
