import React from "react";
import PropTypes from "prop-types";
import Noimage from "../images/no_image.jpg";
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../config";
import MovieThumb from "./MovieThumb";

import { StyledMovieInfo } from "../styles/StyledMovieInfo";

const MovieInfo = ({ movie }) => (
	<StyledMovieInfo backdrop={movie.backdrop_path}>
		<div className="movieinfo-content">
			<div className="movieinfo-thumb">
				<MovieThumb
					image={

							movie.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}` :
							Noimage
					}
					clickable={false}
				/>
			</div>
			<div className="movieinfo-text">
				<h1>{movie.title}</h1>
				<h3>PLOT</h3>
				<p>{movie.overview}</p>

				<div className="rating-director">
					<h3 style={{ color: "white" }}>IMDB RATING</h3>
					<div className="score">{movie.vote_average}</div>
				</div>
				<div className="director">
					{/* or just add an (s) */}
					<h3>
						Director{
							movie.directors.length > 1 ? "s" :
							""}
						{movie.directors.map((element) => (
							<p key={element.credit_id}>{element.name}</p>
						))}
					</h3>
					<h3>
						Producer
						{
							movie.producers.length > 1 ? "s" :
							""}
						{movie.producers.map((element) => (
							<p key={element.credit_id}>{element.name}</p>
						))}
					</h3>
				</div>
			</div>
		</div>
	</StyledMovieInfo>
);

MovieInfo.propTypes = {
	movies: PropTypes.object,
	directors: PropTypes.array,
	producers: PropTypes.array,
};

export default MovieInfo;
