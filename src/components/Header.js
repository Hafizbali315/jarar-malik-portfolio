import Navbar from './Navbar'
import HeroCircle from '../assets/HeroCircle.png'

const Header = () => {
	return (
		<div className="header">
			<Navbar />

			<div className="container">
				<div className="hero_lg">
					<div className=" left_col">
						<h2>
							Product Designer
							<br />
							Branding
							<br />
							UI/UX Designer
							<br />
							Web design
						</h2>

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

						<div className="hero_circle">
							<img src={HeroCircle} alt="hero-circle" />
						</div>
					</div>
				</div>

				<div className="hero_sm">
					<div className="hero_circle">
						<img src={HeroCircle} alt="hero-circle" />
					</div>
					<h2>
						Product Designer
						<br />
						Branding
						<br />
						UI/UX Designer
						<br />
						Web design
					</h2>

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
