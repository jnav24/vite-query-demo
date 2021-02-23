import React from 'react';
// @ts-ignore
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import FetchData from './FetchData';
import FetchQueryData from './FetchQueryData';
import Home from './Home';

function App() {
	return (
		<Router>
			<div>
				<nav>
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/fetch-data">Fetch Data</Link>
						</li>
						<li>
							<Link to="/fetch-query-data">Fetch Query Data</Link>
						</li>
					</ul>
				</nav>
			</div>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/fetch-data" component={FetchData} />
				<Route exact path="/fetch-query-data" component={FetchQueryData} />
			</Switch>
		</Router>
	);
}

export default App;
