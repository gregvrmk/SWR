import AbstractView from './AbstractView.js';

const contactForm = document.querySelector('.contact-form');

export default class extends AbstractView {
	constructor() {
		super();
		this.setTitle('Contact');
	}

	async getHtml() {
		return `
        <div class="form-container">
			<form class="contact-form">
				<h2>Contact</h2>
				<input type="text" id="name" placeholder="Full Name" /></br>
				<input type="email" id="email" placeholder="Email" /></br>
				<input type="text" id="subject" placeholder="Subject" /></br>
				<textarea id="message" placeholder="Message" cols="30" rows="10"></textarea></br>
                <input type='submit' class='submit' value='Send Message'>
                </form>
		</div>
        `;
	}
}
