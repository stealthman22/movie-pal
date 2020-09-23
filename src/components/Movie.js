import React from "react";

// importing elements for this page/route

import MovieInfo from "./elements/MovieInfo";
import MovieInfoBar from "./elements/MovieInfoBar";
import Nav from "./elements/Nav";
import Actors from "./elements/Actors    ";
import Grid from "./elements/Grid";
import Spinner from "./elements/Spinner";

//  Make a movie a page/route
const Movie = ({ movieId }) => (
	<React.Fragment>
		<Nav />
		<MovieInfo />
		<MovieInfoBar />
		<Grid>
			<Actor />
		</Grid>
		<Spinner />
	</React.Fragment>
);

export default Movie;
