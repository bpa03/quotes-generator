import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";

import { Quotes } from "../components/Quotes.jsx";
import { Authors } from '../components/Authors.jsx';

export const AppRouter = () => {
	return (
		<>
			<Router>
				<Switch>
					<Route exact component={Quotes} path="/quotes" />
					<Route exact component={Authors} path="/authors" />
					<Redirect to="/quotes" />
				</Switch>
			</Router>
		</>
	);
};
