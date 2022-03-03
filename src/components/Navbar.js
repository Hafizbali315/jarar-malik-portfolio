import { useState } from 'react'

import LogoWhite from '../assets/LogoWhite.png'

import { FaLinkedinIn, FaBehanceSquare, FaTelegramPlane, FaInstagram, FaTwitter } from 'react-icons/fa'
import { BsDiscord } from 'react-icons/bs'
import { GiHamburgerMenu } from 'react-icons/gi'

const Navbar = () => {
	const [showSidebar, setShowSidebar] = useState()

	return (
		<div className="navbar">
			<div className="container">
				<div className="content">
					<div className="logo">
						<img src={LogoWhite} alt="logo" />
					</div>

					<ul className="page_links">
						<li>
							<a href="#about">about</a>
						</li>
						<li>
							<a href="#projects">projects</a>
						</li>
						<li>
							<a href="#clients">clients</a>
						</li>
						<li>
							<a href="#contact">contact</a>
						</li>
					</ul>

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

					<div className="hamburger_menu">
						{showSidebar ? (
							<span onClick={() => setShowSidebar(false)}> X </span>
						) : (
							<GiHamburgerMenu className="icon" onClick={() => setShowSidebar(true)} />
						)}
					</div>

					{showSidebar && (
						<div className="mobile_sidebar">
							<ul className="mb_links">
								<li>
									<a href="#about" onClick={() => setShowSidebar(false)}>
										about
									</a>
								</li>
								<li>
									<a href="#projects" onClick={() => setShowSidebar(false)}>
										projects
									</a>
								</li>
								<li>
									<a href="#clients" onClick={() => setShowSidebar(false)}>
										clients
									</a>
								</li>
								<li>
									<a href="#contact" onClick={() => setShowSidebar(false)}>
										contact
									</a>
								</li>

								<li>
									<ul className="mb_social_links">
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
								</li>
							</ul>
						</div>
					)}
				</div>
			</div>
		</div>
	)
}

export default Navbar
