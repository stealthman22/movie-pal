//  useCallback to stop useEffect from going into an infinity loop
import { useState, useEffect, useCallback } from "react";
import { API_URL, API_KEY } from "../../config";

export const useMovieFetch = (movieId) => {
	const [ state, setState ] = useState({});
	const [ loading, setLoading ] = useState(true);
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
				const directors = creditResult.crew.filter(
					(member) => member.job === "Director"
				);
				const producers = creditResult.crew.filter(
					(member) => member.job === "Producer"
				);
				setState({
					...results,
					actors: creditResult.cast,
					directors,
					producers,
				});
			} catch (error) {
				setError(true);
			} finally {
				setLoading(false);
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
