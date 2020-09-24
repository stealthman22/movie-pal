import React from "react";
//  useCallback to stop useEffect from going into an infinity loop
import { useState, useEffect, useCallback } from "react";
import { API_URL, API_KEY } from "../../config";

export const useMovieFetch = (movieId) => {
	const [ state, setState ] = useState({});
	const [ loading, setLoading ] = useState(false);
	const [ error, setError ] = useState(false);

	const fetchData = useCallback(
		async () => {
			setError(false);
			setLoading(true);

			try {
				const endpoint = `${API_URL}movie/${movieId}?api_key=${API_KEY}`;
				const results = await (await fetch(endpoint)).json();
				console.log(results);
				const creditEndpoint = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;

				const creditResult = await (await fetch(creditEndpoint)).json();
				console.log(creditResult);
				const directorsProducers = creditResult.crew.filter(
					(member) => member.job === "Director" || member.job === "Producer"
				);
				setState({
					...results,
					actors: creditResult.cast,
					directorsProducers,
				});
			} catch (error) {
				setError(true);
			}

			// movieId is a dependency array that prevents the fn from
			// going into a infinity loop
		},
		[ movieId ]
	);
	useEffect(
		() => {
			fetchData();
		},
		[ fetchData ]
	);
	return [ state, loading, error ];
};
