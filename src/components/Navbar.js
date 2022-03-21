import { useEffect, useState } from 'react'
import { Link, animateScroll } from 'react-scroll'

import LogoWhite from '../assets/LogoWhite.png'
import { GiHamburgerMenu } from 'react-icons/gi'

const Navbar = () => {
	const [showSidebar, setShowSidebar] = useState()
	const [navbarBg, setNavbarBg] = useState('')

	const listenScrollEvent = () => {
		if (window.scrollY < 100) {
			return setNavbarBg('transparent')
		} else if (window.scrollY > 100) {
			return setNavbarBg('colored')
		}
	}

	useEffect(() => {
		window.addEventListener('scroll', listenScrollEvent)

		return () => window.removeEventListener('scroll', listenScrollEvent)
	}, [])

	const scrollToTop = () => {
		animateScroll.scrollToTop({ duration: 500, smooth: true })
	}

	return (
		<div className={`navbar ${navbarBg}`}>
			<div className="container">
				<div className="content">
					<ul className="lg_page_links">
						<div className="logo">
							<a
								className="link"
								onClick={() => {
									scrollToTop()
								}}
								href="#header"
							>
								<img src={LogoWhite} alt="logo" />
							</a>
						</div>

						<li>
							<Link className="link" to="about" smooth={true} duration={300} delay={0}>
								about
							</Link>
						</li>
						<li>
							<Link className="link" to="projects" smooth={true} duration={300} delay={0}>
								projects
							</Link>
						</li>
						<li>
							<Link className="link" to="clients" smooth={true} duration={300} delay={0}>
								clients
							</Link>
						</li>
						<li>
							<Link className="link" to="contact" smooth={true} duration={300} delay={0}>
								contact
							</Link>
						</li>

						<li>
							<a className="link" href="https://www.behance.net/Jararjerry51ba" target="_blank" rel="noreferrer">
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
