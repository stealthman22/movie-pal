import React from "react";

//  user defined components
import Header from "./elements/Header";
import Home from "./Home";
import { GlobalStyle } from "./styles/GlobalStyle";

const App = () => (
	<React.Fragment>
		<Header />
		<Home />
		<GlobalStyle />
	</React.Fragment>
);

export default App;
