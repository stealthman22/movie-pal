import React from "react";
import { Router } from "@reach/router";

//  user defined components
import Header from "./elements/Header";
import Home from "./Home";
import Movie from "./Movie";
import NotFound from "./NotFound";

import { GlobalStyle } from "./styles/GlobalStyle";

const App = () => (
	<React.Fragment>
		<Header />
		{/* {creating routes using reach router} */}
		<Router>
			<Home path="/" />
			<Movie path="/:movieId" />
			{/* default acts as a fallback when it doesn't find root */}
			<NotFound default />
		</Router>;
		<GlobalStyle />
	</React.Fragment>
);

export default App;
