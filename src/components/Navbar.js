import { useState } from 'react'

import LogoWhite from '../assets/LogoWhite.png'
import { GiHamburgerMenu } from 'react-icons/gi'

const Navbar = () => {
	const [showSidebar, setShowSidebar] = useState()

	return (
		<div className="navbar">
			<div className="container">
				<div className="content">
					<ul className="lg_page_links">
						<li className="logo">
							<a href="#top">
								<img src={LogoWhite} alt="logo" />
							</a>
						</li>

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

						<li>
							<a href="https://www.behance.net/Jararjerry51ba" target="_blank" rel="noreferrer">
								behance
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
									<a href="https://www.behance.net/Jararjerry51ba" onClick={() => setShowSidebar(false)} target="_blank" rel="noreferrer">
										behance
									</a>
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
