import React from "react";
import { StyledMovieThumb } from "../styles/StyledMovieThumb";
import { Link } from "@reach/router";

const MovieThumb = ({ image, movie, movieId, movieName, clickable }) => (
	<StyledMovieThumb>
		{
			clickable ? <Link to={`/${movieId}`}>
				<img className="clickable" src={image} alt="moviethumb" />
			</Link> :
			<img src={image} alt="moviethumb" />}
	</StyledMovieThumb>
);

export default MovieThumb;
