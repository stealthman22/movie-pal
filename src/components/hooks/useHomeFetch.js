import { useState, useEffect } from "react";
import { POPULAR_BASELINE_URL } from "../../config";

export const useHomeFetch = (searchTerm) => {
	const [ state, setState ] = useState({ movies: [] });
	const [ loading, setLoading ] = useState(false);
	const [ error, setError ] = useState(false);

	// async calls waits for something to be returned (our movies)
	const fetchMovies = async (endpoint) => {
		setError(false);
		setLoading(true);

		// this would help us choose endpoint, by searching through the string
		// search is a string method returns -1 if it doesn't find query

		const isLoadMore = endpoint.search("page");

		// try catch block
		// Await the data, then await again to first parse it into json
		try {
			const result = await (await fetch(endpoint)).json();
			// extra () make it treat this as an object not at funcion
			setState((prev) => ({
				...prev,
				// The returned movies
				movies:

						isLoadMore !== -1 ? [ ...prev.movies, ...result.results ] :
						[ ...result.results ],
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
		if (sessionStorage.homeState) {
			// grabbing from session storage if there is
			// console.log("Grabbing from session storage");
			setState(JSON.parse(sessionStorage.homeState));
			setLoading(false);
		}
		else {
			console.log("Grabbing from API");
			fetchMovies(POPULAR_BASELINE_URL);
		}

		// empty array is called a dependency array
		// prevents endpoint from running every render
		// it runs it once the component is mounted at app start
	}, []);

	// for session storage
	useEffect(
		() => {
			if (!searchTerm) {
				// console.log("Writing to session storage");
				sessionStorage.setItem("homeState", JSON.stringify(state));
			}
		},
		[ searchTerm, state ]
	);

	return [ { state, loading, error }, fetchMovies ];
};

// In the fetch movies fucntion, after building isloadmore method, next we have to restructure state
//  if we load more movies (), we want to append the new movies, and keep the old movies in the state
// else we want to wipe out the old movies and display the new one
