import React from 'react';
import ReactRouter from 'react-router';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Home from '../components/Home';
import Base from '../components/Base';

let Routes = () => {
	return(
		<Router history={hashHistory}>
			<Route path='/' component={Base}>
				<IndexRoute component={Home} />
			</Route>
		</Router>
	)
}


export default Routes
