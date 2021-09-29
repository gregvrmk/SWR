import AbstractView from './AbstractView.js';

export default class extends AbstractView {
	constructor() {
		super();
		this.name = 'Contact';
		this.setTitle(this.name);
	}
}
