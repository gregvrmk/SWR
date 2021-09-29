import AbstractView from './AbstractView.js';

export default class extends AbstractView {
	constructor() {
		super();
		this.name = 'Home';
		this.setTitle(this.name);
	}
}
