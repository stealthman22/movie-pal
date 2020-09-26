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

	if (error) return <div>OOPs... I dunno why that just happened!</div>;
	if (loading) return <Spinner />;
	return (
		<React.Fragment>
			<Nav movie={movie.original_title} />
			<MovieInfo movie={movie} />

			<MovieInfoBar
				time={movie.runtime}
				budget={movie.budget}
				revenue={movie.revenue}
			/>
			<Grid headers="Actors">
				{movie.actors.map((actor) => <Actors key={actor.cast_id} actor={actor} />)}
			</Grid>
		</React.Fragment>
	);
};

export default Movie;
