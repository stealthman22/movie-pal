import { useState, useEffect } from "react";
import { API_URL, API_KEY } from "../../config";

export const useHomeFetch = () => {
	const [ state, setState ] = useState({ movies: [] });
	const [ loading, setLoading ] = useState(false);
	const [ error, setError ] = useState(false);

	// async calls waits for something to be returned (our movies)
	const fetchMovies = async (endpoint) => {
		setError(false);
		setLoading(true);

		// try catch block
		// Await the data, then await again to first parse it into json
		try {
			const result = await (await fetch(endpoint)).json();
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

	return [ { state, loading, error }, fetchMovies ];
};
