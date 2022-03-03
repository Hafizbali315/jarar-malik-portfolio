import { FaLinkedinIn, FaBehanceSquare, FaTelegramPlane, FaInstagram, FaTwitter } from 'react-icons/fa'
import { BsDiscord } from 'react-icons/bs'

const Contact = () => {
	return (
		<div className="contact" id="contact">
			<div className="container">
				<h1>CONTACT</h1>

				<div className="content">
					<div className="left">
						<p>Send me an email</p>

						<form>
							<div className="input_container">
								<input type="email" placeholder="Email" />
							</div>
							<div className="input_container">
								<input type="text" placeholder="Message" />
							</div>

							<button>Send</button>
						</form>
					</div>

					<div className="right">
						<p>Follow me on</p>

						<ul className="social_links">
							<li>
								<a href="https://www.linkedin.com/in/jarar-nazar/" target="_blank" rel="noreferrer">
									<FaLinkedinIn className="icon" />
								</a>
							</li>

							<li>
								<a href="https://www.behance.net/Jararjerry51ba" target="_blank" rel="noreferrer">
									<FaBehanceSquare className="icon" />
								</a>
							</li>

							<li>
								<a href="https://www.instagram.com/jararmalik95/" target="_blank" rel="noreferrer">
									<FaInstagram className="icon" />
								</a>
							</li>

							<li>
								<a href="https://telegram.me/JayForeJessi" target="_blank" rel="noreferrer">
									<FaTelegramPlane className="icon" />
								</a>
							</li>

							<li>
								<a href="https://discord.com/channels/808234830579499009" target="_blank" rel="noreferrer">
									<BsDiscord className="icon" />
								</a>
							</li>

							<li>
								<a href="https://twitter.com/JararMalik" target="_blank" rel="noreferrer">
									<FaTwitter className="icon" />
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Contact
