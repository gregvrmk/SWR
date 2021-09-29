'use strict';

export default class {
	constructor(name) {
		this.name = name;
	}

	setTitle(title) {
		document.title = title;
	}

	async getHtml() {
		return fetch(`/static/html/${this.name}.html`).then(r => r.text());
	}
}
