import AbstractView from './AbstractView.js';

export default class extends AbstractView {
	constructor() {
		super();
		this.name = 'Records';
		this.setTitle(this.name);
	}
}
