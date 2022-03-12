import { motion } from 'framer-motion'
import Navbar from './Navbar'
import HeroCircle from '../assets/HeroCircle.png'
import { FirstCircleAnimationSm, FirstCircleAnimationLg } from './../animations/animations'

const Header = () => {
	return (
		<div className="header" id="header">
			<Navbar />

			<div className="container">
				<div className="hero_lg">
					<div className=" left_col">
						<h1>
							CREATIVE
							<br />
							PRODUCT & CRYPTO
							<br />
							Venture Studio
						</h1>

						<a href="#about">
							<div className="learn_more"></div>
						</a>
					</div>

					<div className="right_col">
						<div className="right_rectangle"></div>
						<p>
							I am a product designer based in Islamabad, Pakistan.
							<br />
							My aim is to drive growth for your business making your brand more compelling online.
						</p>

						<motion.div className="hero_circle" variants={FirstCircleAnimationLg} initial="hide" animate="show">
							<img src={HeroCircle} alt="hero-circle" />
						</motion.div>
					</div>
				</div>

				<div className="hero_sm">
					<motion.div variants={FirstCircleAnimationSm} initial="hide" animate="show" className="hero_circle">
						<img src={HeroCircle} alt="hero-circle" />
					</motion.div>
					<h1>
						CREATIVE
						<br />
						PRODUCT & CRYPTO
						<br />
						Venture Studio
					</h1>

					<p>
						I am a product designer based in Islamabad, Pakistan.
						<br />
						My aim is to drive growth for your business making your brand more compelling online.
					</p>

					<a href="#about">
						<div className="learn_more"></div>
					</a>
				</div>
			</div>
		</div>
	)
}

export default Header
