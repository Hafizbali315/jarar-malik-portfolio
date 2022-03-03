import AboutCircleLg from '../assets/AboutCircleLg.png'

const About = () => {
	return (
		<div className="about" id="about">
			<div className="container">
				<h1>About</h1>

				<div className="content_row">
					<div className="content_card">
						<p>
							Creating meaningful and diverse projects for all levels of ambition, I have had the privilege to get involved in some
							cutting-edge projects with respected agencies & studios over the years, building brand identities and their applications.
						</p>
						<p>
							My approach to design is to keep things simple but fun. I identify and solve complex problems using design thinking. By
							building design processes, I help teams (developers, designers, product managers) work more efficiently.
						</p>
					</div>

					<div className="circle">
						<img src={AboutCircleLg} alt="AboutCircleLg" />
					</div>
				</div>
			</div>
		</div>
	)
}

export default About
