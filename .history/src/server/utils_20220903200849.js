import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

export const render = (store, routes, req) => {
		console.log(store,"----1");
		const content = renderToString((
			<Provider store={store}>
				<StaticRouter location={req.path} context={{}}>
					<div>
						{routes.map(route => (
		      		<Route {...route}/>
		    		))}
	    		</div>
				</StaticRouter>
			</Provider>
		));

		return `
			<html>
				<head>
					<title>ssr</title>
				</head>
				<body>
					<div id="root">${content}</div>
					<script>window.context = {
						state: ${JSON.stringify(store.getState())}
					}</script>
					<script src='/index.js'></script>
				</body>
			</html>
	  `;

}