'use strict';

import Home from './views/Home.js';
import Records from './views/Records.js';
import Contact from './views/Contact.js';

const navigateTo = url => {
	history.pushState(null, null, url);
	router();
};

const router = async () => {
	const routes = [
		{ path: '/', view: Home },
		{ path: '/Records', view: Records },
		{ path: '/Contact', view: Contact },
	];

	// Test each route for potential matching routes
	const potentialMatches = routes.map(route => {
		return {
			route: route,
			isMatch: location.pathname === route.path,
		};
	});

	let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch);

	if (!match) {
		match = {
			route: route[0],
			isMatch: true,
		};
	}

	const view = new match.route.view();

	document.querySelector('#app').innerHTML = await view.getHtml();
};

window.addEventListener('popstate', router);

document.addEventListener('DOMContentLoaded', () => {
	document.body.addEventListener('click', e => {
		if (e.target.matches('[data-link]')) {
			e.preventDefault();
			navigateTo(e.target.href);
		}
	});

	router();
});
