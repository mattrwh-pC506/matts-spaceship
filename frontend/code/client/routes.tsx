import { React } from 'react';

import { Router, Route, IndexRoute } from 'react-router';

import { Layout } from './pages/layout';
import { Not_found } from './pages/not found';
import { Home } from './pages/home';


// ({ dispatch, getState }) 
export default function() {
    const routes = (
        <Route path="/" component= { Layout } >
            <IndexRoute component={Home}/>
                < Route path= "*" component= { Not_found } />
                    </Route>
	);

    return routes;
}
