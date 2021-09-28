import AbstractView from './AbstractView.js';

export default class extends AbstractView {
	constructor() {
		super();
		this.setTitle('Home');
	}

	async getHtml() {
		return `

        <div class="logo">
        <img src="static/images/text-logo.png" alt="Secret Weapon Records Logo" />
        </div>

        <div class="info-container">
        <p>Formed in 2001, Secret Weapon Records is a purveyor of the four-on-the-floor
        techno sound that has roots in Great Lakes Region of North America
        (Toronto/Detroit/Chicago) and has spread around the world. The music reflects
        the sounds of the electronic age as it crashed up on the age of heavy machinery.
        The label has hosted a wide array of artists including Chicago veteran L.A
        Williams (under his German Broadcasters moniker); studio mastermind Adam K,
        Poland’s unstoppable Greg Kobe, Juno award (Canada’s Grammys) nominees
        Arthur Oskan and Noah Pred and label boss Mark Quail (under numerous
        pseudonyms: Samoan Attorney, The Attorney General and in collaboration with
        Plus 8 Records alumnus Himadri, under the name The Diamond Dogs).</p>
        <br>
        <p>Find our music at these outlets:</p>
        </div>

        <div class="music-links">
        <a href="https://open.spotify.com/playlist/6eHFfiG6RauuIfG0Zmh4qv?si=fuI4eHyhTMSlKDQMlLNgdg&nd=1" >
        <i class="fab fa-spotify"></i>
        </a>
        <a href="https://www.beatport.com/label/secret-weapon-records/423" target='_blank'>
        <svg role="img" fill: currentColor viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Beatport</title><path d="M14.668 24c-3.857 0-6.935-3.039-6.935-6.974a6.98 6.98 0 011.812-4.714l-4.714 4.714-2.474-2.474 5.319-5.26c.72-.72 1.09-1.656 1.09-2.688V0h3.487v6.604c0 2.026-.72 3.74-2.123 5.143l-.156.156a6.945 6.945 0 014.694-1.812c3.955 0 6.975 3.136 6.975 6.935A6.943 6.943 0 0114.668 24zm0-10.714c-2.123 0-3.779 1.753-3.779 3.74 0 2.045 1.675 3.78 3.78 3.78a3.804 3.804 0 003.818-3.78c0-2.065-1.715-3.74-3.819-3.74Z"/></svg>
        </a>
        </div>
        `;
	}
}
